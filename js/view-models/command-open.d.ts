import { ParticlesViewModel } from "./particles-view-model";
import { ICommand } from "qtk";
export declare class CommandOpen implements ICommand {
    protected _viewModel: ParticlesViewModel;
    constructor(viewModel: ParticlesViewModel);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModel: ParticlesViewModel): ICommand;
}
