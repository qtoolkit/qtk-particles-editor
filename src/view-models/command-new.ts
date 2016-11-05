import {ParticlesViewModel} from "./particles-view-model";
import {ICommand, InteractionRequest, ChoiceInfo} from "qtk";

export class CommandNew implements ICommand {
	protected _choiceInfo : ChoiceInfo;
	protected _viewModel : ParticlesViewModel;

	constructor(viewModel:ParticlesViewModel, choiceInfo:ChoiceInfo) {
		this._viewModel = viewModel;
		this._choiceInfo = choiceInfo;
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		var viewModel = this._viewModel;
		console.log("CommandNew");
		InteractionRequest.choice(this._choiceInfo, (ret:ChoiceInfo) => {
			var arr = ret.value;
			if(arr && arr.length) {
				var template = arr[0].text;
				viewModel.createDoc(template);
			}
		});

		return true;
	}

	public static create(viewModel:ParticlesViewModel, templates:Array<string>) : ICommand {
		var choiceInfo = ChoiceInfo.create("Please choose a template", false, 300, 300);
		templates.forEach((item:string) => {
			choiceInfo.addOption(item);
		});

		return new CommandNew(viewModel, choiceInfo);
	}
};
