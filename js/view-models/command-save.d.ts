import { ParticlesViewModel } from "./particles-view-model";
import { ICommand, InputInfo } from "qtk";
export declare class CommandSave implements ICommand {
    protected _isSaveAs: boolean;
    protected _inputInfo: InputInfo;
    protected _viewModel: ParticlesViewModel;
    constructor(viewModel: ParticlesViewModel, isSaveAs: boolean);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModel: ParticlesViewModel, isSaveAs: boolean): ICommand;
}
