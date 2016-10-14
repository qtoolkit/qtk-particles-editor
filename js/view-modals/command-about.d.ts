import { ParticlesViewModal } from "./particles-view-modal";
import { ICommand, PropsInfo } from "qtk";
export declare class CommandAbout implements ICommand {
    protected _propsInfo: PropsInfo;
    protected _viewModal: ParticlesViewModal;
    constructor(viewModal: ParticlesViewModal, propsInfo: PropsInfo);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModal: ParticlesViewModal, engine: string): ICommand;
}
