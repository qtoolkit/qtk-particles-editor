import { ICommand, IViewModal } from "qtk";
export declare class CommandOpen implements ICommand {
    protected _viewModal: IViewModal;
    constructor(viewModal: IViewModal);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModal: IViewModal): ICommand;
}
