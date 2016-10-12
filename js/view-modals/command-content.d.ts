import { ICommand } from "qtk";
import { ParticlesViewModal } from "./particles-view-modal";
export declare class CommandContent implements ICommand {
    protected _helpURL: string;
    protected _viewModal: ParticlesViewModal;
    constructor(viewModal: ParticlesViewModal, helpURL: string);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModal: ParticlesViewModal, helpURL: string): ICommand;
}
