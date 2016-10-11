import { MenuBar, Menu, IViewModal } from "qtk";
export declare class MainMenuBar extends MenuBar {
    protected viewModal: IViewModal;
    protected onFileMenu(menu: Menu): void;
    protected onHelpMenu(menu: Menu): void;
    protected onEditMenu(menu: Menu): void;
    protected onCreated(): void;
    static create(options: any): MainMenuBar;
}
