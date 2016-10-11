import { IViewModal } from "qtk";
import { PagePropsDesc } from "qtk";
import { IParticlesDocument } from "../providers/iparticles-document";
export interface IMainViewModal extends IViewModal {
    getPropsDesc(): Array<PagePropsDesc>;
    getDocument(): IParticlesDocument;
}
