import { PagePropsDesc } from "qtk";
export declare class Template {
    data: any;
    propsDesc: Array<PagePropsDesc>;
    parse(json: Array<any>): void;
    static templates: {};
    static register(name: string, json: any): void;
    static create(name: string): Template;
}
