import { Template } from "./template";
import { IProtonData } from "./iproton-data";
import { PagePropsDesc } from "qtk";
import { ValidationResult } from "qtk";
import { ParticlesViewModal } from "../particles-view-modal";
import { IParticlesViewModal } from "../iparticles-view-modal";
export declare class ProtonViewModal extends ParticlesViewModal implements IProtonData {
    canvas: any;
    protonEmitter: any;
    protected template: Template;
    getPropsDesc(): Array<PagePropsDesc>;
    setProp(path: string, value: any, converter?: string, validationRule?: string): ValidationResult;
    constructor(template: Template);
    protected createEmitter(): void;
    static TYPE: string;
    static create(options: any): IParticlesViewModal;
    static proton: any;
    static update(): void;
}
