import {DockLayouterParam, Direction} from "qtk";
import {Widget, MenuBar, MenuBarItem, Menu, MenuItem, IViewModal} from "qtk";

export class MainMenuBar extends MenuBar {
	protected viewModal : IViewModal;

	constructor() {
		super();
	}

	protected onFileMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("Open", null).set({dataBindingRule:{click:{command:"open"}}});
		menu.addItem("Save", null).set({dataBindingRule:{click:{command:"save"}}});

		menu.bindData(this.viewModal);
	}

	protected onEditMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("Undo", null).set({dataBindingRule:{click:{command:"undo"}}});
		menu.addItem("Redo", null).set({dataBindingRule:{click:{command:"redo"}}});

		menu.bindData(this.viewModal);
	}

	protected createUI() {
		this.addItem("File", this.onFileMenu.bind(this));
		this.addItem("Edit", this.onEditMenu.bind(this));
	}

	public static create(options: any) : MainMenuBar {
		var menuBar = new MainMenuBar();
		menuBar.reset("menu-bar", options);
		menuBar.createUI();

		return menuBar;
	}
};

