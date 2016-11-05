import { ParticlesViewModel } from "./particles-view-model";
import { ICommand, ChoiceInfo } from "qtk";
export declare class CommandNew implements ICommand {
    protected _choiceInfo: ChoiceInfo;
    protected _viewModel: ParticlesViewModel;
    constructor(viewModel: ParticlesViewModel, choiceInfo: ChoiceInfo);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModel: ParticlesViewModel, templates: Array<string>): ICommand;
}
