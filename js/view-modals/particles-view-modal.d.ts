import { IDocument } from "../modals/idocument";
import { IParticlesViewModal } from "./iparticles-view-modal";
import { ViewModal, ValidationResult } from "qtk";
import { PagePropsDesc, ItemsStorage } from "qtk";
export declare abstract class ParticlesViewModal extends ViewModal implements IParticlesViewModal {
    protected doc: IDocument;
    protected fileName: string;
    protected storage: ItemsStorage;
    protected docList: Array<string>;
    getDocList(): Array<string>;
    getDocName(): string;
    getPropsDesc(): Array<PagePropsDesc>;
    saveDoc(fileName: string): void;
    protected createEmitter(): void;
    createDoc(templateName: string): void;
    openDoc(fileName: string): void;
    removeDoc(fileName: string): void;
    getFormatList(): Array<string>;
    exportDoc(format: string): string;
    setProp(path: string, value: any, converter?: string, validationRule?: string): ValidationResult;
    getTemplateList(): Array<string>;
    protected updateDocList(): void;
}
