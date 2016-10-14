import {ParticlesViewModal} from "./particles-view-modal";
import {ICommand, InteractionRequest, ChoiceInfo} from "qtk";

export class CommandOpen implements ICommand {
	protected _viewModal : ParticlesViewModal;

	constructor(viewModal:ParticlesViewModal) {
		this._viewModal = viewModal;
	}

	public canExecute() : boolean {
		var viewModal = this._viewModal;
		var docList = viewModal.getDocList();
		return docList && docList.length > 0;
	}

	public execute(args:any) : boolean {
		var viewModal = this._viewModal;
		var docList = viewModal.getDocList();
		var choiceInfo = ChoiceInfo.create("Open...", false, 300, 300);
		docList.forEach((item:string) => {
			choiceInfo.addOption(item);
		});

		InteractionRequest.choice(choiceInfo, (ret:ChoiceInfo) => {
			var arr = ret.value;
			if(arr && arr.length) {
				var fileName = arr[0].text;
				viewModal.openDoc(fileName);
			}
		});

		return true;
	}

	public static create(viewModal:ParticlesViewModal) : ICommand {

		return new CommandOpen(viewModal);
	}
};
