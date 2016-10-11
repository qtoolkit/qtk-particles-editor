import { IMainViewModal } from "./imain-view-modal";
import { PagePropsDesc } from "qtk";
import { ViewModal, ValidationResult } from "qtk";
import { IParticlesDocument } from "../providers/iparticles-document";
import { IParticlesProvider } from "../providers/iparticles-provider";
export declare class MainViewModal extends ViewModal implements IMainViewModal {
    protected _provider: IParticlesProvider;
    protected _document: IParticlesDocument;
    setProp(path: string, value: any, converter?: string, validationRule?: string): ValidationResult;
    getProp(path: string, converter?: string): any;
    constructor(provider: IParticlesProvider);
    getDocument(): IParticlesDocument;
    getPropsDesc(): Array<PagePropsDesc>;
    init(): this;
    static create(provider: IParticlesProvider): IMainViewModal;
}
