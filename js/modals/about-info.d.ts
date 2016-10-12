export declare class AboutInfo {
    author: string;
    email: string;
    home: string;
    engine: string;
    constructor(author: string, email: string, home: string, engine: string);
    static create(author: string, email: string, home: string, engine: string): AboutInfo;
}
