import {CommandOpen} from "./command-open";
import {CommandSave} from "./command-save";
import {IDocument} from "../models/idocument";
import {Document} from "../models/document";
import {IParticlesViewModel} from "./iparticles-view-model";
import {ViewModel, IViewModel, ValidationResult} from "qtk"
import {PropsDesc, PagePropsDesc, Events, ItemsStorage} from "qtk";

export abstract class ParticlesViewModel extends ViewModel implements IParticlesViewModel {
	public canvas : any;
	protected type : string;
	protected doc : IDocument;
	protected fileName : string;
	protected storage : ItemsStorage;
	protected docList : Array<string>;
	
	/*
	 * subclass should implement it.
	 */
	protected abstract createEmitter();
	protected abstract registerConverters();
	protected abstract registerCommands();

	protected onDocReplaced() {
	}


	public getDocList() : Array<string> {
		return this.docList;
	}
	
	public getDocName() : string {
		return this.fileName;
	}

	public getPropsDesc() : Array<PagePropsDesc> {
		return this.doc.propsDesc;
	}

	public saveDoc(fileName:string) {
		var data = JSON.stringify(this.doc.toJson(), null, "\t"); 
		
		this.fileName = fileName;
		this.storage.set(fileName, data);
		this.updateDocList();
	}

	protected syncData(data:any) {
		this.data = data;
		this.createEmitter();
		this.updateDocList();
		this.onDocReplaced();
	}

	public createDoc(templateName:string) {
		this.fileName = null;
		this.doc.fromTemplate(templateName);
		this.syncData(this.doc.data);
	}

	protected loadData(json:any) {
		this.doc.fromJson(json);
		this.syncData(this.doc.data);
	}

	public openDoc(fileName:string) {
		this.fileName = fileName;
		var data = this.storage.get(fileName);
		var json = JSON.parse(data);

		this.loadData(json);
	}

	public removeDoc(fileName:string) {
		this.storage.remove(fileName);
		this.updateDocList();
	}
	
	public getFormatList() : Array<string> {
		return ["json"];
	}

	public exportDoc(format:string) : string {
		if(format.indexOf("json") >= 0) {
			return JSON.stringify(this.data, null, "\t");
		}

		return null; 
	}
	
	public setProp(path:string, value:any, converter?:string, validationRule?:string) : ValidationResult {
		var result = super.setProp(path, value, converter, validationRule);
		this.createEmitter();

		return result;
	}
	
	public getTemplateList() : Array<string> {
		return this.doc.getTemplateList();
	}

	protected updateDocList() {
		this.docList = this.storage.getItems();
	}
	
	public getPropTitleWidth() : string {
		return "30%";
	}
	
	public saveTemp() {
		var docInfo = {
			fileName : this.fileName,
			doc : this.doc.toJson()
		};
		var data = JSON.stringify(docInfo, null, "\t"); 
		var key = "temp." + this.type;
		localStorage.setItem(key, data);
	}

	public loadTemp(){
		var key = "temp." + this.type;
		var str = localStorage.getItem(key);
		if(str) {
			var data = JSON.parse(str);
			this.fileName = data.fileName;
			this.loadData(data.doc);
		}else{
			this.createDoc("default");
		}
	}

	constructor(data:any, type:string, storage:ItemsStorage) {
		super(data);
		this.type = type;
		this.storage = storage;
		this.canvas = document.createElement('canvas');
		
		this.registerCommands();
		this.registerConverters();
		this.doc = Document.create();
		
		this.loadTemp();
		
		var me = this;
		window.onunload = function() {
			me.saveTemp();
		}
	}
};

