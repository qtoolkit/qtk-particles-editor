import {DockLayouterParam, Direction} from "qtk";
import {Widget, MenuBar, MenuBarItem, Menu, MenuItem, IViewModal} from "qtk";

export class MainMenuBar extends MenuBar {
	protected viewModal : IViewModal;

	protected onFileMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("Open", null).set({dataBindingRule:{click:{command:"open"}}});
		menu.addItem("Save", null).set({dataBindingRule:{click:{command:"save"}}});

		menu.bindData(this.viewModal);
	}
	
	protected onHelpMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("About", null).set({dataBindingRule:{click:{command:"about"}}});
		menu.addItem("About QToolKit", null).set({dataBindingRule:{click:{command:"about-qtk"}}});

		menu.bindData(this.viewModal);
	}

	protected onEditMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("Undo", null).set({dataBindingRule:{click:{command:"undo"}}});
		menu.addItem("Redo", null).set({dataBindingRule:{click:{command:"redo"}}});

		menu.bindData(this.viewModal);
	}

	protected onCreated() {
		super.onCreated();

		this.addLogo("https://qtoolkit.github.io/demos/assets/icons/@density/apple.png");

		this.addItem("File", this.onFileMenu.bind(this));
		this.addItem("Edit", this.onEditMenu.bind(this));
		this.addItem("Help", this.onHelpMenu.bind(this));
	}

	public static create(options: any) : MainMenuBar {
		var menuBar = new MainMenuBar();
		menuBar.reset("menu-bar", options);

		return menuBar;
	}
};

