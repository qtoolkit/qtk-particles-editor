import { ParticlesViewModal } from "./particles-view-modal";
import { ICommand } from "qtk";
export declare class CommandOpen implements ICommand {
    protected _viewModal: ParticlesViewModal;
    constructor(viewModal: ParticlesViewModal);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModal: ParticlesViewModal): ICommand;
}
