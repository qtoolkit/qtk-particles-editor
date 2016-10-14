import { IParticlesViewModal } from "./iparticles-view-modal";
import { PagePropsDesc } from "qtk";
import { ViewModal } from "qtk";
export declare abstract class ParticlesViewModal extends ViewModal implements IParticlesViewModal {
    getPropsDesc(): Array<PagePropsDesc>;
    getDocList(): Array<string>;
    getFormatList(): Array<string>;
    getDocName(): string;
    openDoc(fileName: string): void;
    saveDoc(fileName: string): void;
    createDoc(templateName: string): void;
    removeDoc(fileName: string): void;
    exportDoc(format: string): string;
}
