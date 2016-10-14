import {ParticlesViewModal} from "./particles-view-modal";
import {ICommand, InteractionRequest, ToastInfo, InputInfo} from "qtk";

export class CommandSave implements ICommand {
	protected _isSaveAs : boolean;
	protected _inputInfo : InputInfo;
	protected _viewModal : ParticlesViewModal;

	constructor(viewModal:ParticlesViewModal, isSaveAs:boolean) {
		this._isSaveAs = isSaveAs;
		this._viewModal = viewModal;
		this._inputInfo = InputInfo.create("Please input file name:", null);
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		var viewModal = this._viewModal;
		var fileName = viewModal.getDocName();

		if(!fileName || this._isSaveAs) {
			InteractionRequest.input(this._inputInfo, function(ret:InputInfo) {
				if(ret.value) {
					viewModal.saveDoc(ret.value);
				}
			});
		}else{
			viewModal.saveDoc(fileName);
			InteractionRequest.toast(ToastInfo.create("Save done."));
		}

		return true;
	}

	public static create(viewModal:ParticlesViewModal, isSaveAs:boolean) : ICommand {
		return new CommandSave(viewModal, isSaveAs);
	}
};
