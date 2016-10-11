import { Rect } from "qtk";
import { ValidationResult } from "qtk";
export interface IParticlesDocument {
    getProp(path: string): any;
    setProp(path: string, value: any): ValidationResult;
    draw(ctx: any, rect: Rect): any;
    toJson(): any;
    fromJson(json: any): boolean;
}
