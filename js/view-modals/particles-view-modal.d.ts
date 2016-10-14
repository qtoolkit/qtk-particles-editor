import { IParticlesViewModal } from "./iparticles-view-modal";
import { PagePropsDesc } from "qtk";
import { ViewModal } from "qtk";
export declare abstract class ParticlesViewModal extends ViewModal implements IParticlesViewModal {
    fileName: string;
    getDocList(): Array<string>;
    getFormatList(): Array<string>;
    saveDoc(fileName: string): void;
    createDoc(templateName: string): void;
    openDoc(fileName: string): void;
    removeDoc(fileName: string): void;
    newWithTemplate(name: string): void;
    getPropsDesc(): Array<PagePropsDesc>;
}
