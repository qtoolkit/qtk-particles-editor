import { Application } from "qtk";
import { MainWindow } from "./views/main-window";
import { IParticlesViewModal } from "./view-modals/iparticles-view-modal";
export declare class ParticlesEditor extends Application {
    mainWindow: MainWindow;
    protected getViewModalName(): string;
    protected createViewModal(): IParticlesViewModal;
    onReady(): void;
    static run(): ParticlesEditor;
}
