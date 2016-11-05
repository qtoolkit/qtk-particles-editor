import {Events, DockLayouterParam, Direction} from "qtk";
import {Widget, MenuBar, MenuBarItem, Menu, MenuItem} from "qtk";
import {ParticlesViewModel} from "../view-models/particles-view-model";

export class MainMenuBar extends MenuBar {
	protected viewModel : ParticlesViewModel;

	protected onFileMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("New", null).set({dataBindingRule:{click:{command:"new"}}});
		menu.addItem("Open", null).set({dataBindingRule:{click:{command:"open"}}});
		menu.addItem("Save", null).set({dataBindingRule:{click:{command:"save"}}});
		menu.addItem("Save As", null).set({dataBindingRule:{click:{command:"save-as"}}});
		menu.addItem("Remove", null).set({dataBindingRule:{click:{command:"remove"}}});
		menu.addSpace();
		menu.addItem("Export", null).set({dataBindingRule:{click:{command:"export"}}});

		menu.bindData(this.viewModel);
	}
	
	protected onHelpMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("Content", null).set({dataBindingRule:{click:{command:"content"}}});
		menu.addItem("About", null).set({dataBindingRule:{click:{command:"about"}}});

		menu.bindData(this.viewModel);
	}

	protected onCreated() {
		super.onCreated();

		this.addLogo("https://qtoolkit.github.io/demos/assets/icons/@density/apple.png");

		this.addItem("File", this.onFileMenu.bind(this));
		this.addItem("Help", this.onHelpMenu.bind(this));
	}

	public static create(options: any) : MainMenuBar {
		var menuBar = new MainMenuBar();
		menuBar.reset("menu-bar", options);

		return menuBar;
	}
};

