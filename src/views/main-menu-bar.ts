import {AboutInfo} from "../modals/about-info";
import {Events, DockLayouterParam, Direction} from "qtk";
import {Widget, MenuBar, MenuBarItem, Menu, MenuItem} from "qtk";
import {ParticlesViewModal} from "../view-modals/particles-view-modal";
import {AboutDialog} from "./about-dialog"

export class MainMenuBar extends MenuBar {
	protected viewModal : ParticlesViewModal;

	protected onFileMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("New", null).set({dataBindingRule:{click:{command:"new"}}});
		menu.addItem("Open", null).set({dataBindingRule:{click:{command:"open"}}});
		menu.addItem("Save", null).set({dataBindingRule:{click:{command:"save"}}});
		menu.addSpace();
		menu.addItem("Export", null).set({dataBindingRule:{click:{command:"export"}}});

		menu.bindData(this.viewModal);
	}
	
	protected onHelpMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("Content", null).set({dataBindingRule:{click:{command:"content"}}});
		menu.addItem("About", null).set({dataBindingRule:{click:{command:"about"}}});

		menu.bindData(this.viewModal);
	}

	protected onEditMenu(menu:Menu) {
		menu.w = 128;
		menu.addItem("Undo", null).set({dataBindingRule:{click:{command:"undo"}}});
		menu.addItem("Redo", null).set({dataBindingRule:{click:{command:"redo"}}});

		menu.bindData(this.viewModal);
	}

	protected showAbout(evt:Events.ViewRequestEvent) {
		AboutDialog.show(<AboutInfo>evt.payload, evt.returnResult.bind(evt));
	}
	
	protected showContent(evt:Events.ViewRequestEvent) {
		var helpURL = <string>evt.payload;
		window.open(helpURL, "_blank");
	}

	protected onCreated() {
		super.onCreated();

		this.addLogo("https://qtoolkit.github.io/demos/assets/icons/@density/apple.png");

		this.addItem("File", this.onFileMenu.bind(this));
		this.addItem("Edit", this.onEditMenu.bind(this));
		this.addItem("Help", this.onHelpMenu.bind(this));

		this.viewModal.on(Events.SHOW_VIEW, (evt:Events.ViewRequestEvent) => {
			var name = evt.name;
			switch(name) {
				case "help.about": {
					this.showAbout(evt);
					break;
				}
				case "help.content": {
					this.showContent(evt);
					break;
				}
			}
		});
	}

	public static create(options: any) : MainMenuBar {
		var menuBar = new MainMenuBar();
		menuBar.reset("menu-bar", options);

		return menuBar;
	}
};

