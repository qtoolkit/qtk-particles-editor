import {CommandOpen} from "./command-open";
import {CommandSave} from "./command-save";
import {IDocument} from "../modals/idocument";
import {IParticlesViewModal} from "./iparticles-view-modal";
import {ViewModal, IViewModal, ValidationResult} from "qtk"
import {PropsDesc, PagePropsDesc, Events, ItemsStorage} from "qtk";

export abstract class ParticlesViewModal extends ViewModal implements IParticlesViewModal {
	protected doc : IDocument;
	protected fileName : string;
	protected storage : ItemsStorage;
	protected docList : Array<string>;
	
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

	/*
	 * subclass should implement it.
	 */
	protected createEmitter() {
	}

	public createDoc(templateName:string) {
		this.doc.fromTemplate(templateName);
		this.data = this.doc.data;
		
		this.createEmitter();
		this.updateDocList();
	}
	
	public openDoc(fileName:string) {
		var data = this.storage.get(fileName);
		var json = JSON.parse(data);

		this.doc.fromJson(json);
		this.data = this.doc.data;

		this.createEmitter();
		this.fileName = fileName;
		this.updateDocList();
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
};

