import {Direction, Application} from "qtk";
import {MainMenuBar} from "./main-menu-bar";
import {ParticlesView} from "./particles-view";
import {ParticleProperties} from "./particle-properties";
import {IParticlesViewModel} from "../view-models/iparticles-view-model";
import {Widget, IViewModel, WindowNormal, DockLayouter, DockLayouterParam} from "qtk"

export class MainWindow extends WindowNormal {
	protected viewModel : IParticlesViewModel;

	protected onCreated() {
		super.onCreated();

		var viewModel = this.viewModel;
		this.childrenLayouter = DockLayouter.create();

		this.addChild(MainMenuBar.create({viewModel:viewModel, 
			layoutParam : DockLayouterParam.create({position:Direction.TOP, size:30})
		}));
		
		this.addChild(ParticlesView.create({viewModel:viewModel, 
			layoutParam : DockLayouterParam.create({position:Direction.LEFT, size:"70%"})
		}));
		
		this.addChild(ParticleProperties.create({viewModel:viewModel, 
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


