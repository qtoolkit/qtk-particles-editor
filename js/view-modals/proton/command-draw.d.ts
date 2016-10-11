import { ICommand } from "qtk";
import { IProtonData } from "./iproton-data";
export declare class CommandDraw implements ICommand {
    protected _protonData: IProtonData;
    constructor(protonData: IProtonData);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(protonData: IProtonData): ICommand;
}
