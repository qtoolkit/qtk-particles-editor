import { Application } from "qtk";
import { MainWindow } from "./views/main-window";
export declare class ParticlesEditor extends Application {
    mainWindow: MainWindow;
    onReady(): void;
    static run(): ParticlesEditor;
}
