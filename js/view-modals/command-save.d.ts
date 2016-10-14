import { ParticlesViewModal } from "./particles-view-modal";
import { ICommand, InputInfo } from "qtk";
export declare class CommandSave implements ICommand {
    protected _inputInfo: InputInfo;
    protected _viewModal: ParticlesViewModal;
    constructor(viewModal: ParticlesViewModal);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModal: ParticlesViewModal): ICommand;
}
