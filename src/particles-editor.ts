
import {Application, ItemsStorage, Events} from "qtk";
import {MainWindow} from "./views/main-window";
import {ProtonViewModal} from "./view-modals/proton/view-modal";
import {Cocos2dViewModal} from "./view-modals/cocos2d/view-modal";
import {IParticlesViewModal, ParticlesViewModalFactory} from "./view-modals/iparticles-view-modal";

var themeDataURL = "https://qtoolkit.github.io/demos/assets/theme/default/theme.json";

export class ParticlesEditor extends Application {
	public mainWindow : MainWindow;

	protected getViewModalName() : string {
		return Cocos2dViewModal.TYPE;
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

