import { ParticlesViewModel } from "./particles-view-model";
import { ICommand } from "qtk";
export declare class CommandRemove implements ICommand {
    protected _viewModel: ParticlesViewModel;
    constructor(viewModel: ParticlesViewModel);
    canExecute(): boolean;
    protected confirmRemove(items: Array<any>): void;
    execute(args: any): boolean;
    static create(viewModel: ParticlesViewModel): ICommand;
}
