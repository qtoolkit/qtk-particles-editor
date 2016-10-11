import { Rect, ValidationResult } from "qtk";
import { IParticlesDocument } from "../iparticles-document";
export declare class ProtonDocument implements IParticlesDocument {
    protected canvas: any;
    protected emitter: any;
    data: any;
    copyRange(to: any, value: any, fix: boolean): void;
    getProp(path: string): any;
    setProp(path: string, value: any): ValidationResult;
    draw(ctx: any, rect: Rect): void;
    toJson(): any;
    fromJson(json: any): boolean;
    protected prepareDefaultData(): void;
    protected createEmitter(): void;
    constructor();
    static proton: any;
    static update(): void;
    static create(): IParticlesDocument;
}
