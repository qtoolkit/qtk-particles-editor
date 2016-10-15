import "./particles-latest";
import "../../modals/cocos2d/templates";
import { ParticlesViewModal } from "../particles-view-modal";
import { ItemsStorage } from "qtk";
import { IParticlesViewModal } from "../iparticles-view-modal";
export declare class Cocos2dViewModal extends ParticlesViewModal {
    canvas: any;
    protected particlesEmitter: any;
    constructor(storage: ItemsStorage);
    protected registerConverters(): void;
    protected registerCommands(): void;
    protected createEmitter(): void;
    static TYPE: string;
    static create(options: any): IParticlesViewModal;
}
