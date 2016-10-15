
import {MainWindow} from "./views/main-window";
import {Application, ItemsStorage, Events} from "qtk";
import {IParticlesViewModal, ParticlesViewModalFactory} from "./view-modals/iparticles-view-modal";

var themeDataURL = "https://qtoolkit.github.io/demos/assets/theme/default/theme.json";

export class ParticlesEditor extends Application {
	public mainWindow : MainWindow;

	protected getViewModalName() : string {
		return null;
	}

	protected createViewModal() : IParticlesViewModal {
		var name = this.getViewModalName();
		var storage = ItemsStorage.create(name);
		return ParticlesViewModalFactory.create(name, {storage:storage});
	}

	public onReady() {
		var vp = this.getViewPort();
		var viewModal = this.createViewModal();
		this.mainWindow = MainWindow.create({w:vp.w, h:vp.h, app:this, viewModal:viewModal});
	}

	public static run() : ParticlesEditor {
		var app = new ParticlesEditor("particles-editor");
		app.init({sysThemeDataURL:themeDataURL});
		app.run();

		return app;
	}
};

