
import "./particles-latest";

import "../../modals/cocos2d/templates";
import {CommandDraw} from "../command-draw";
import {CommandNew} from "../command-new";
import {CommandOpen} from "../command-open";
import {CommandSave} from "../command-save";
import {CommandExport} from "../command-export";
import {CommandAbout} from "../command-about";
import {CommandRemove} from "../command-remove";
import {CommandContent} from "../command-content";
import {createCocos2dEmitter} from "./cocos2d-wrapper";
import {PropsDesc, PagePropsDesc, Events} from "qtk";
import {Document} from "../../modals/document";
import {IDocument} from "../../modals/idocument";
import {ParticlesViewModal} from "../particles-view-modal";
import {RangeFixer, Vector2Fixer, NumberFixer} from "qtk"
import {ViewModal, IViewModal, ItemsStorage, ValidationResult} from "qtk"
import {IParticlesViewModal, ParticlesViewModalFactory} from "../iparticles-view-modal";

declare var ParticleEmitter : any;

export class Cocos2dViewModal extends ParticlesViewModal {
	public canvas : any;
	protected particlesEmitter : any;
	
	constructor(storage:ItemsStorage) {
		super(null);
		
		this.canvas = document.createElement('canvas');
		this.canvas.width = 400;
		this.canvas.height = 400;
		
		this.storage = storage;
		
		this.registerCommands();
		this.registerConverters();

		this.doc = Document.create();
		this.createDoc("default");
		this.updateDocList();
	}

	protected registerConverters() {
		this.registerValueConverter("radius", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("life", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("mass", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("point", Vector2Fixer.create(0, 1000, 0, 1000));
		this.registerValueConverter("scale", RangeFixer.create(0, 10, 0, 10, false));
		this.registerValueConverter("alpha", RangeFixer.create(0, 1, 0, 1, false));
		this.registerValueConverter("rate-num", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("rate-time", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("v-rpan", RangeFixer.create(0, 1000, 0, 1000, true));
		this.registerValueConverter("v-thapath", RangeFixer.create(-1000, 1000, -1000, 1000, true));
		this.registerValueConverter("delay", NumberFixer.create(0, 10));
	}

	protected registerCommands() {
		this.registerCommand("draw", CommandDraw.create(this.canvas));
		this.registerCommand("about", CommandAbout.create(this, "https://github.com/a-jie/Cocos2d"));
		this.registerCommand("content", CommandContent.create(this, "http://cocos2d.jpeer.at/index.html"));
		this.registerCommand("new", CommandNew.create(this, Document.getTemplateList()));
		this.registerCommand("open", CommandOpen.create(this));
		this.registerCommand("remove", CommandRemove.create(this));
		this.registerCommand("save", CommandSave.create(this, false));
		this.registerCommand("save-as", CommandSave.create(this, true));
		this.registerCommand("export", CommandExport.create(this));
	}

	protected createEmitter() {
		var data = this.data;
		this.particlesEmitter = createCocos2dEmitter(this.particlesEmitter, data);
	}

	public static TYPE = "cocos2d";
	public static create(options:any) : IParticlesViewModal {
		var viewModal = new Cocos2dViewModal(options.storage);
		function update() {
			var canvas = viewModal.canvas;
			var emitter = viewModal.particlesEmitter;
			if(emitter) {
				emitter.update(1000/60);
				var ctx = canvas.getContext("2d");
				emitter.draw(ctx);	
			}
			requestAnimationFrame(update);
		}
		requestAnimationFrame(update);

		return viewModal;
	}
};

ParticlesViewModalFactory.register(Cocos2dViewModal.TYPE, Cocos2dViewModal.create);

