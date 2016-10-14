import {ParticlesViewModal} from "./particles-view-modal";
import {ICommand, InteractionRequest, ChoiceInfo} from "qtk";

export class CommandRemove implements ICommand {
	protected _choiceInfo : ChoiceInfo;
	protected _viewModal : ParticlesViewModal;

	constructor(viewModal:ParticlesViewModal, choiceInfo:ChoiceInfo) {
		this._viewModal = viewModal;
		this._choiceInfo = choiceInfo;
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		var viewModal = this._viewModal;
		InteractionRequest.choice(this._choiceInfo, (ret:ChoiceInfo) => {
			var arr = ret.value;
			if(arr && arr.length) {
				var fileName = arr[0].text;
				viewModal.removeDoc(fileName);
			}
		});

		return true;
	}

	public static create(viewModal:ParticlesViewModal) : ICommand {
		var docList = viewModal.getDocList();
		var choiceInfo = ChoiceInfo.create("Remove...", false, 300, 300);
		docList.forEach((item:string) => {
			choiceInfo.addOption(item);
		});

		return new CommandRemove(viewModal, choiceInfo);
	}
};
