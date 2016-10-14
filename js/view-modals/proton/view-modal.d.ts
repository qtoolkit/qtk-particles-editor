import { Document } from "./document";
import { IProtonData } from "./iproton-data";
import { PagePropsDesc } from "qtk";
import { ItemsStorage, ValidationResult } from "qtk";
import { ParticlesViewModal } from "../particles-view-modal";
import { IParticlesViewModal } from "../iparticles-view-modal";
export declare class ProtonViewModal extends ParticlesViewModal implements IProtonData {
    canvas: any;
    fileName: string;
    protonEmitter: any;
    storage: ItemsStorage;
    protected renderer: any;
    protected doc: Document;
    getDocList(): Array<string>;
    saveDoc(fileName: string): void;
    createDoc(templateName: string): void;
    removeDoc(fileName: string): void;
    openDoc(fileName: string): void;
    getPropsDesc(): Array<PagePropsDesc>;
    setProp(path: string, value: any, converter?: string, validationRule?: string): ValidationResult;
    constructor(doc: Document, storage: ItemsStorage);
    protected registerCommands(): void;
    protected createEmitter(): void;
    getDocumentList(): Array<string>;
    static TYPE: string;
    static create(options: any): IParticlesViewModal;
    static proton: any;
    static update(): void;
}
