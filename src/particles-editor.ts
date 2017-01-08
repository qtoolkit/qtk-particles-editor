
import {MainWindow} from "./views/main-window";
import {Application, ItemsStorage, Events} from "qtk";
import {IParticlesViewModel, ParticlesViewModelFactory} from "./view-models/iparticles-view-model";

var themeDataURL = "https://qtoolkit.github.io/demos/assets/theme/default/theme.js";

export class ParticlesEditor extends Application {
	public mainWindow : MainWindow;
	protected _viewModelName : string;

	constructor(appName:string, viewModelName:string) {
		super(appName);
		this._viewModelName = viewModelName;
	}

	protected getViewModelName() : string {
		return this._viewModelName;
	}

	protected createViewModel() : IParticlesViewModel {
		var name = this.getViewModelName();
		var storage = ItemsStorage.create(name);
		return ParticlesViewModelFactory.create(name, {storage:storage});
	}

	public onReady() {
		var vp = this.getViewPort();
		var viewModel = this.createViewModel();
		this.mainWindow = MainWindow.create({w:vp.w, h:vp.h, app:this, viewModel:viewModel});
	}

	public static run(appName:string, viewModelName:string) : ParticlesEditor {
		var app = new ParticlesEditor(appName, viewModelName);
		var assetsURLs = [themeDataURL];

		app.preload(assetsURLs, function onLoad() {
			app.init({sysThemeDataURL:themeDataURL});
			app.run();
		});

		return app;
	}
};

