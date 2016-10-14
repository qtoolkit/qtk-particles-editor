import "../../modals/proton/templates";
import { ParticlesViewModal } from "../particles-view-modal";
import { ItemsStorage } from "qtk";
import { IParticlesViewModal } from "../iparticles-view-modal";
export declare class ProtonViewModal extends ParticlesViewModal {
    canvas: any;
    protected renderer: any;
    protected protonEmitter: any;
    constructor(storage: ItemsStorage);
    protected registerConverters(): void;
    protected registerCommands(): void;
    protected createEmitter(): void;
    static TYPE: string;
    static proton: any;
    static update(): void;
    static create(options: any): IParticlesViewModal;
}
