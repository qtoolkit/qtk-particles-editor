export declare class Storage {
    private _prefix;
    private getKey(name);
    save(name: string, data: string): void;
    remove(name: string): boolean;
    load(name: string): string;
    getItems(): Array<string>;
    constructor(prefix: string);
    static create(prefix: string): Storage;
}
