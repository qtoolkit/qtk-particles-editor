var saveAs = require('save-as').default;

import {ParticlesViewModel} from "./particles-view-model";
import {ICommand, InteractionRequest, ChoiceInfo} from "qtk";

export class CommandExport implements ICommand {
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
		InteractionRequest.choice(this._choiceInfo, (ret:ChoiceInfo) => {
			var arr = ret.value;
			if(arr && arr.length) {
				var format = arr[0].text;
				var result = viewModel.exportDoc(format);
				if(result) {
					let blob = new Blob([result], { type: 'text/plain;charset=utf-8' })
					saveAs(blob, 'particles.json')
				}
			}
		});
		return true;
	}

	public static create(viewModel:ParticlesViewModel) : ICommand {
		var formatList = viewModel.getFormatList();
		var choiceInfo = ChoiceInfo.create("Export as...", false, 300, 200);
		formatList.forEach((item:string) => {
			choiceInfo.addOption(item);
		});

		return new CommandExport(viewModel, choiceInfo);
	}
};
