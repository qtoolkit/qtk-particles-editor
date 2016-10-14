
var proton = require("proton");
import {Document} from "./document";
import {IProtonData} from "./iproton-data";
import {Converters} from "./converters";
import {CommandDraw} from "./command-draw";
import {CommandNew} from "../command-new";
import {CommandOpen} from "../command-open";
import {CommandSave} from "../command-save";
import {CommandExport} from "../command-export";
import {CommandAbout} from "../command-about";
import {CommandRemove} from "../command-remove";
import {CommandContent} from "../command-content";
import {createProtonEmitter} from "./proton-wrapper";
import {PropsDesc, PagePropsDesc, Events} from "qtk";
import {ViewModal, IViewModal, ItemsStorage, ValidationResult} from "qtk"
import {ParticlesViewModal} from "../particles-view-modal";
import {IParticlesViewModal, ParticlesViewModalFactory} from "../iparticles-view-modal";

declare var Proton : any;

export class ProtonViewModal extends ParticlesViewModal implements IProtonData{
	public canvas : any;
	public fileName : string;
	public protonEmitter : any;
	public storage : ItemsStorage;
	protected docList : Array<string>;

	protected renderer : any;
	protected doc : Document;
	
	public getFormatList() : Array<string> {
		return ["json"];
	}

	public getDocList() : Array<string> {
		return this.docList;
	}
	
	public saveDoc(fileName:string) {
		var data = JSON.stringify(this.doc.toJson(), null, "\t"); 
		this.storage.set(fileName, data);
		this.fileName = fileName;
		this.docList = this.storage.getItems();
	}
	
	public createDoc(templateName:string) {
		var doc = Document.createFromTemplate("default");
		this.doc = doc;
		this.data = this.doc.data;
		this.createEmitter();
		this.notifyChange(Events.PROP_CHANGE, "/", null);
		this.docList = this.storage.getItems();
	}
	
	public removeDoc(fileName:string) {
		this.storage.remove(fileName);
		this.docList = this.storage.getItems();
	}

	public openDoc(fileName:string) {
		var data = this.storage.get(fileName);
		var json = JSON.parse(data);

		this.doc.fromJson(json);
		this.data = this.doc.data;

		this.createEmitter();
		this.fileName = fileName;
		this.notifyChange(Events.PROP_CHANGE, "/", null);
		this.docList = this.storage.getItems();
	}

	public exportDoc(format:string) : string {
		return "";
	}

	public getDocName() : string {
		return this.fileName;
	}

	public getPropsDesc() : Array<PagePropsDesc> {
		return this.doc.propsDesc;
	}

	public setProp(path:string, value:any, converter?:string, validationRule?:string) : ValidationResult {
		var result = super.setProp(path, value, converter, validationRule);
		this.createEmitter();

		return result;
	}
	
	constructor(doc:Document, storage:ItemsStorage) {
		super(doc.data);

		this.createEmitter();
		this.storage = storage;
		this.doc = doc;
	
		Converters.init(this);
		this.registerCommands();
		this.docList = this.storage.getItems();
	}

	protected registerCommands() {
		this.registerCommand("draw", CommandDraw.create(this));
		this.registerCommand("about", CommandAbout.create(this, "https://github.com/a-jie/Proton"));
		this.registerCommand("content", CommandContent.create(this, "http://proton.jpeer.at/index.html"));
		this.registerCommand("new", CommandNew.create(this, this.getDocumentList()));
		this.registerCommand("open", CommandOpen.create(this));
		this.registerCommand("remove", CommandRemove.create(this));
		this.registerCommand("save", CommandSave.create(this, false));
		this.registerCommand("save-as", CommandSave.create(this, true));
		this.registerCommand("export", CommandExport.create(this));
	}

	protected createEmitter() {
		var data = this.data;
		var proton = ProtonViewModal.proton;
		
		if(!this.canvas) {
			this.canvas = document.createElement('canvas');
			this.canvas.width = 400;
			this.canvas.height = 400;
			
		}

		if(!this.renderer) {
			var renderer = new Proton.Renderer('canvas', proton, this.canvas);
			this.renderer = renderer;
			renderer.start();
		}

		var emitter = this.protonEmitter;
		if(emitter) {
			proton.removeEmitter(emitter);
			emitter.destroy();
		}

		this.protonEmitter = createProtonEmitter(proton, this.canvas, data);
	}

	public getDocumentList() : Array<string> {
		return Document.templateNames;
	}
	
	public static TYPE = "proton";
	public static create(options:any) : IParticlesViewModal {
		if(!ProtonViewModal.proton) {
			ProtonViewModal.proton = new Proton();			
			requestAnimationFrame(ProtonViewModal.update);
		}

		var doc = Document.createFromTemplate("default");
		var viewModal = new ProtonViewModal(doc, options.storage);

		return viewModal;
	}
	
	public static proton = null;
	public static update() {
		ProtonViewModal.proton.update();
		requestAnimationFrame(ProtonViewModal.update);
	}
};

ParticlesViewModalFactory.register(ProtonViewModal.TYPE, ProtonViewModal.create);

