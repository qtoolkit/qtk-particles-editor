import { PropertySheets, Style } from "qtk";
import { IParticlesViewModal } from "../view-modals/iparticles-view-modal";
export declare class ParticleProperties extends PropertySheets {
    protected _style: Style;
    protected viewModal: IParticlesViewModal;
    getStyle(): Style;
    protected onCreated(): void;
    static TYPE: string;
    static create(options: any): ParticleProperties;
}
