import { MenuBar, Menu } from "qtk";
import { ParticlesViewModel } from "../view-models/particles-view-model";
export declare class MainMenuBar extends MenuBar {
    protected viewModel: ParticlesViewModel;
    protected onFileMenu(menu: Menu): void;
    protected onHelpMenu(menu: Menu): void;
    protected onCreated(): void;
    static create(options: any): MainMenuBar;
}
