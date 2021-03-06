import {ICommand} from "qtk";
import {ParticlesViewModel} from "./particles-view-model";

export class CommandContent implements ICommand {
	protected _helpURL : string;
	protected _viewModel : ParticlesViewModel;

	constructor(viewModel:ParticlesViewModel, helpURL:string) {
		this._viewModel = viewModel;
		this._helpURL = helpURL;
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		console.log("CommandContent");
		window.open(this._helpURL, "_blank");
		return true;
	}

	public static create(viewModel:ParticlesViewModel, helpURL:string) : ICommand {
		return new CommandContent(viewModel, helpURL);
	}
};
