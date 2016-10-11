import { PagePropsDesc } from "qtk";
import { IParticlesDocument } from "../iparticles-document";
import { IParticlesProvider } from "../iparticles-provider";
export declare class ProviderProton implements IParticlesProvider {
    getPropsDesc(): Array<PagePropsDesc>;
    createDocument(): IParticlesDocument;
    static pagesPropsDesc: Array<PagePropsDesc>;
    static create(): IParticlesProvider;
}
