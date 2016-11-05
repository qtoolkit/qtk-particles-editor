import { ParticlesViewModel } from "./particles-view-model";
import { ICommand, PropsInfo } from "qtk";
export declare class CommandAbout implements ICommand {
    protected _propsInfo: PropsInfo;
    protected _viewModel: ParticlesViewModel;
    constructor(viewModel: ParticlesViewModel, propsInfo: PropsInfo);
    canExecute(): boolean;
    execute(args: any): boolean;
    static create(viewModel: ParticlesViewModel, engine: string): ICommand;
}
