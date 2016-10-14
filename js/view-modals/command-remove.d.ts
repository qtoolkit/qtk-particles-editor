import { ParticlesViewModal } from "./particles-view-modal";
import { ICommand } from "qtk";
export declare class CommandRemove implements ICommand {
    protected _viewModal: ParticlesViewModal;
    constructor(viewModal: ParticlesViewModal);
    canExecute(): boolean;
    protected confirmRemove(items: Array<any>): void;
    execute(args: any): boolean;
    static create(viewModal: ParticlesViewModal): ICommand;
}
