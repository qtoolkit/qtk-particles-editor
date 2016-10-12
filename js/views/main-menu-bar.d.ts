import { Events } from "qtk";
import { MenuBar, Menu } from "qtk";
import { ParticlesViewModal } from "../view-modals/particles-view-modal";
export declare class MainMenuBar extends MenuBar {
    protected viewModal: ParticlesViewModal;
    protected onFileMenu(menu: Menu): void;
    protected onHelpMenu(menu: Menu): void;
    protected onEditMenu(menu: Menu): void;
    protected showAbout(evt: Events.ViewRequestEvent): void;
    protected showContent(evt: Events.ViewRequestEvent): void;
    protected onCreated(): void;
    static create(options: any): MainMenuBar;
}
