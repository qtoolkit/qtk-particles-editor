export declare class PropDesc {
    type: string;
    name: string;
    displayName: string;
    desc: string;
    defValue: any;
}
export declare class NumberPropDesc extends PropDesc {
    max: number;
    min: number;
    static TYPE: string;
    static create(name: string, displayName: string, desc: string, defValue: number, min: number, max: number): string;
}
export declare class PropsDesc {
    _items: any;
    parse(json: any): PropsDesc;
    static create(json: any): PropsDesc;
}
