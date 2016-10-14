import { PagePropsDesc } from "qtk";
export declare class Document {
    data: any;
    propsDesc: Array<PagePropsDesc>;
    toJson(): any;
    fromJson(json: any): Document;
    fromTemplate(json: Array<any>): Document;
    static createFromJson(json: any): Document;
    static templates: {};
    static templateNames: any[];
    static registerTemplate(name: string, json: any): void;
    static createFromTemplate(name: string): Document;
}
