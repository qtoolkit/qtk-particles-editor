import { ICommand } from "qtk";
import { ParticlesViewModel } from "./particles-view-model";
export declare class CommandContent implements ICommand {
    protected _helpURL: string;
    protected _viewModel: ParticlesViewModel;
    constructor(viewModel: ParticlesViewModel, helpURL: string);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModel: ParticlesViewModel, helpURL: string): ICommand;
}
