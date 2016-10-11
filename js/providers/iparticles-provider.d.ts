import { PagePropsDesc } from "qtk";
import { IParticlesDocument } from "./iparticles-document";
export interface IParticlesProvider {
    getPropsDesc(): Array<PagePropsDesc>;
    createDocument(): IParticlesDocument;
}
