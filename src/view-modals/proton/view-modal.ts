
var proton = require("proton");
import {Template} from "./template";
import {IProtonData} from "./iproton-data";
import {Converters} from "./converters";
import {CommandDraw} from "./command-draw";
import {CommandAbout} from "../command-about";
import {CommandContent} from "../command-content";
import {AboutInfo} from "../../modals/about-info";

import {PropsDesc, PagePropsDesc, Events} from "qtk";
import {ViewModal, IViewModal, ValidationResult} from "qtk"
import {ParticlesViewModal} from "../particles-view-modal";
import {IParticlesViewModal, ParticlesViewModalFactory} from "../iparticles-view-modal";

declare var Proton : any;

export class ProtonViewModal extends ParticlesViewModal implements IProtonData{
	public canvas : any;
	public protonEmitter : any;
	protected template : Template;
	
	public getPropsDesc() : Array<PagePropsDesc> {
		return this.template.propsDesc;
	}

	public setProp(path:string, value:any, converter?:string, validationRule?:string) : ValidationResult {
		var result = super.setProp(path, value, converter, validationRule);
		this.createEmitter();

		return result;
	}
	
	constructor(template:Template) {
		super(template.data);

		this.createEmitter();
		this.template = template;
	
		Converters.init(this);
		this.registerCommands();
	}

	protected registerCommands() {
		this.registerCommand("draw", CommandDraw.create(this));
		this.registerCommand("about", CommandAbout.create(this, "https://github.com/a-jie/Proton"));
		this.registerCommand("content", CommandContent.create(this, "http://proton.jpeer.at/index.html"));
	}

	protected createEmitter() {
		var data = this.data;

		var proton = ProtonViewModal.proton;
		var life     = new Proton.Life(data.life.first, data.life.second);
		var radius   = new Proton.Radius(data.radius.first, data.radius.second);
		var alpha = new Proton.Alpha(data.alpha.first, data.alpha.second);
		var scale = new Proton.Scale(data.scale.first, data.scale.second);	
		var velocity = new Proton.Velocity(3, Proton.getSpan(0, 360), 'polar');
		var rate = new Proton.Rate(new Proton.Span(data.rateNum.first, data.rateNum.second), 
						new Proton.Span(data.rateTime.first, data.rateTime.second));
		var mass = new Proton.Mass(data.mass.first, data.mass.second);
		var velocity = new Proton.Velocity(new Proton.Span(data.vRpan.first, data.vRpan.second), 
					new Proton.Span(data.vThapan.first, data.vThapan.second), data.vType);

		var randomDrift = new Proton.RandomDrift(data.driftPoint.x, data.driftPoint.y, data.driftDelay);
		var color = new Proton.Color('ff0000', 'random', Infinity, Proton.easeOutQuart);
		if(!this.canvas) {
			this.canvas = document.createElement('canvas');
			this.canvas.width = 400;
			this.canvas.height = 400;
		
			var renderer = new Proton.Renderer('canvas', proton, this.canvas);
			renderer.start();
		}

		var canvas = this.canvas;
		if(this.protonEmitter) {
			proton.removeEmitter(this.protonEmitter);
		}

		var emitter = new Proton.Emitter();
		emitter.rate = rate;
		emitter.addInitialize(mass);
		emitter.addInitialize(radius);
		emitter.addInitialize(life);
		emitter.addInitialize(velocity);

		emitter.addBehaviour(randomDrift);
		emitter.addBehaviour(color);
		emitter.addBehaviour(scale);
		emitter.addBehaviour(alpha);
		emitter.p.x = data.position.x;
		emitter.p.y = data.position.y;
		emitter.emit();
		proton.addEmitter(emitter);

		this.protonEmitter = emitter;
	}

	public static TYPE = "proton";
	public static create(options:any) : IParticlesViewModal {
		if(!ProtonViewModal.proton) {
			ProtonViewModal.proton = new Proton();			
			requestAnimationFrame(ProtonViewModal.update);
		}

		var name = options ? (options.template || "default") : "default";
		var template = Template.create(name);
		var viewModal = new ProtonViewModal(template);

		return viewModal;
	}
	
	public static proton = null;
	public static update() {
		ProtonViewModal.proton.update();
		requestAnimationFrame(ProtonViewModal.update);
	}
};

ParticlesViewModalFactory.register(ProtonViewModal.TYPE, ProtonViewModal.create);

