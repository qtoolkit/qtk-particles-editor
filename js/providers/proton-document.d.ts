import { Rect } from "qtk";
import { IParticlesDocument } from "./iparticles-document";
export declare class ProtonDocument implements IParticlesDocument {
    setProp(prop: string, value: any): boolean;
    getProp(prop: string): any;
    draw(ctx: any, rect: Rect): void;
    toJson(): any;
    fromJson(json: any): boolean;
    constructor();
    static create(): IParticlesDocument;
}
