import { ParticlesViewModal } from "./particles-view-modal";
import { ICommand, ChoiceInfo } from "qtk";
export declare class CommandExport implements ICommand {
    protected _choiceInfo: ChoiceInfo;
    protected _viewModal: ParticlesViewModal;
    constructor(viewModal: ParticlesViewModal, choiceInfo: ChoiceInfo);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModal: ParticlesViewModal): ICommand;
}
