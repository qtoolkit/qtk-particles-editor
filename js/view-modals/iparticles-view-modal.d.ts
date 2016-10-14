import { IViewModal } from "qtk";
import { PagePropsDesc } from "qtk";
export interface IParticlesViewModal extends IViewModal {
    getPropsDesc(): Array<PagePropsDesc>;
    newWithTemplate(name: string): any;
}
export declare class ParticlesViewModalFactory {
    static viewModals: any;
    static register(type: string, creator: Function): void;
    static create(type: string, options?: any): IParticlesViewModal;
}
