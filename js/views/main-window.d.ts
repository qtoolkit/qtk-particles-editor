import { IParticlesViewModel } from "../view-models/iparticles-view-model";
import { WindowNormal } from "qtk";
export declare class MainWindow extends WindowNormal {
    protected viewModel: IParticlesViewModel;
    protected onCreated(): void;
    static create(options: any): MainWindow;
}
