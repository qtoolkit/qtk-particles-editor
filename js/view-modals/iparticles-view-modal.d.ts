import { IViewModal } from "qtk";
import { PagePropsDesc } from "qtk";
export interface IParticlesViewModal extends IViewModal {
    getPropsDesc(): Array<PagePropsDesc>;
    getDocList(): Array<string>;
    getFormatList(): Array<string>;
    getDocName(): string;
    openDoc(fileName: string): any;
    saveDoc(fileName: string): any;
    createDoc(templateName: string): any;
    removeDoc(fileName: string): any;
    exportDoc(format: string): string;
}
export declare class ParticlesViewModalFactory {
    static viewModals: any;
    static register(type: string, creator: Function): void;
    static create(type: string, options?: any): IParticlesViewModal;
}
