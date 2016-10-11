
import {Application, Events} from "qtk";
import {MainWindow} from "./views/main-window";
import {ProtonViewModal} from "./view-modals/proton/view-modal";
import {ParticlesViewModalFactory} from "./view-modals/iparticles-view-modal";

var themeDataURL = "https://qtoolkit.github.io/demos/assets/theme/default/theme.json";

export class ParticlesEditor extends Application {
	public mainWindow : MainWindow;

	public onReady() {
		var vp = this.getViewPort();
		var viewModal = ParticlesViewModalFactory.create(ProtonViewModal.TYPE);

		this.mainWindow = MainWindow.create({w:vp.w, h:vp.h, app:this, viewModal:viewModal});
	}

	public static run() : ParticlesEditor {
		var app = new ParticlesEditor("particles-editor");
		app.init({sysThemeDataURL:themeDataURL});
		app.run();

		return app;
	}
};

