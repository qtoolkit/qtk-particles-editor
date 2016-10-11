import { IParticlesViewModal } from "../view-modals/iparticles-view-modal";
import { WindowNormal } from "qtk";
export declare class MainWindow extends WindowNormal {
    protected viewModal: IParticlesViewModal;
    protected onCreated(): void;
    static create(options: any): MainWindow;
}
