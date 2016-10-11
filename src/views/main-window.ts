import {Direction, Application} from "qtk";
import {MainMenuBar} from "./main-menu-bar";
import {ParticlesView} from "./particles-view";
import {ParticleProperties} from "./particle-properties";
import {IParticlesViewModal} from "../view-modals/iparticles-view-modal";
import {Widget, IViewModal, WindowNormal, DockLayouter, DockLayouterParam} from "qtk"

export class MainWindow extends WindowNormal {
	protected viewModal:IParticlesViewModal;

	constructor() {
		super();
	}

	protected onCreated() {
		super.onCreated();

		var viewModal = this.viewModal;
		this.childrenLayouter = DockLayouter.create();

		this.addChild(MainMenuBar.create({viewModal:viewModal, 
			layoutParam : DockLayouterParam.create({position:Direction.TOP, size:30})
		}));
		
		this.addChild(ParticlesView.create({viewModal:viewModal, 
			layoutParam : DockLayouterParam.create({position:Direction.LEFT, size:"70%"})
		}));
		
		this.addChild(ParticleProperties.create({viewModal:viewModal, 
			layoutParam : DockLayouterParam.create({position:Direction.LEFT, size:"100%"})
		}));
	}

	public static create(options:any) : MainWindow {
		var win = new MainWindow();
		win.reset("main-window", options);
		win.open();

		return win;
	}
};


