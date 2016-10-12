import { ICommand } from "qtk";
import { AboutInfo } from "../modals/about-info";
import { ParticlesViewModal } from "./particles-view-modal";
export declare class CommandAbout implements ICommand {
    protected _viewModal: ParticlesViewModal;
    protected _aboutInfo: AboutInfo;
    constructor(viewModal: ParticlesViewModal, aboutInfo: AboutInfo);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModal: ParticlesViewModal, engine: string): ICommand;
}
