import { IDocument } from "../idocument";
import { PagePropsDesc } from "qtk";
export declare class Document implements IDocument {
    data: any;
    propsDesc: Array<PagePropsDesc>;
    toJson(): any;
    fromJson(json: any): Document;
    fromTemplate(name: string): Document;
    static createFromJson(json: any): Document;
    getTemplateList(): Array<string>;
    static templates: {};
    static templateNames: any[];
    static registerTemplate(name: string, json: any): void;
    static getTemplateList(): Array<string>;
    static createFromTemplate(name: string): Document;
}
