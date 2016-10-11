import { MenuBar, Menu, IViewModal } from "qtk";
export declare class MainMenuBar extends MenuBar {
    protected viewModal: IViewModal;
    constructor();
    protected onFileMenu(menu: Menu): void;
    protected onEditMenu(menu: Menu): void;
    protected createUI(): void;
    static create(options: any): MainMenuBar;
}
