import {ParticlesViewModel} from "./particles-view-model";
import {ICommand, InteractionRequest, ToastInfo, InputInfo} from "qtk";

export class CommandSave implements ICommand {
	protected _isSaveAs : boolean;
	protected _inputInfo : InputInfo;
	protected _viewModel : ParticlesViewModel;

	constructor(viewModel:ParticlesViewModel, isSaveAs:boolean) {
		this._isSaveAs = isSaveAs;
		this._viewModel = viewModel;
		this._inputInfo = InputInfo.create("Please input file name:", null);
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		var viewModel = this._viewModel;
		var fileName = viewModel.getDocName();

		if(!fileName || this._isSaveAs) {
			InteractionRequest.input(this._inputInfo, function(ret:InputInfo) {
				if(ret.value) {
					viewModel.saveDoc(ret.value);
				}
			});
		}else{
			viewModel.saveDoc(fileName);
			InteractionRequest.toast(ToastInfo.create("Save done."));
		}

		return true;
	}

	public static create(viewModel:ParticlesViewModel, isSaveAs:boolean) : ICommand {
		return new CommandSave(viewModel, isSaveAs);
	}
};
