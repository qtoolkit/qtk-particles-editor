
var proton = require("proton");

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
import {IDocument} from "../../modals/idocument";
import {Document} from "../../modals/proton/document";
import {ParticlesViewModal} from "../particles-view-modal";
import {ViewModal, IViewModal, ItemsStorage, ValidationResult} from "qtk"
import {IParticlesViewModal, ParticlesViewModalFactory} from "../iparticles-view-modal";

declare var Proton : any;

export class ProtonViewModal extends ParticlesViewModal {
	public canvas : any;
	protected renderer : any;
	protected protonEmitter : any;
	
	constructor(storage:ItemsStorage) {
		super(null);
		
		this.canvas = document.createElement('canvas');
		this.canvas.width = 400;
		this.canvas.height = 400;
		
		this.storage = storage;
		
		Converters.init(this);
		this.registerCommands();
		
		this.doc = Document.createFromTemplate(null);
		this.createDoc("default");
		this.updateDocList();
	}

	protected registerCommands() {
		this.registerCommand("draw", CommandDraw.create(this.canvas));
		this.registerCommand("about", CommandAbout.create(this, "https://github.com/a-jie/Proton"));
		this.registerCommand("content", CommandContent.create(this, "http://proton.jpeer.at/index.html"));
		this.registerCommand("new", CommandNew.create(this, Document.getTemplateList()));
		this.registerCommand("open", CommandOpen.create(this));
		this.registerCommand("remove", CommandRemove.create(this));
		this.registerCommand("save", CommandSave.create(this, false));
		this.registerCommand("save-as", CommandSave.create(this, true));
		this.registerCommand("export", CommandExport.create(this));
	}

	protected createEmitter() {
		var data = this.data;
		var proton = ProtonViewModal.proton;
		
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

		this.protonEmitter = createProtonEmitter(proton, data);
	}

	public static TYPE = "proton";
	public static proton = null;
	public static update() {
		ProtonViewModal.proton.update();
		requestAnimationFrame(ProtonViewModal.update);
	}

	public static create(options:any) : IParticlesViewModal {
		if(!ProtonViewModal.proton) {
			ProtonViewModal.proton = new Proton();			
			requestAnimationFrame(ProtonViewModal.update);
		}

		return new ProtonViewModal(options.storage);
	}
};

ParticlesViewModalFactory.register(ProtonViewModal.TYPE, ProtonViewModal.create);

