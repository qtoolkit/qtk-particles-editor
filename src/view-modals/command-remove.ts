import {ParticlesViewModal} from "./particles-view-modal";
import {ICommand, InteractionRequest, ConfirmationInfo, ChoiceInfo} from "qtk";

export class CommandRemove implements ICommand {
	protected _viewModal : ParticlesViewModal;

	constructor(viewModal:ParticlesViewModal) {
		this._viewModal = viewModal;
	}

	public canExecute() : boolean {
		var viewModal = this._viewModal;
		var docList = viewModal.getDocList();
		return docList && docList.length > 0;
	}

	protected confirmRemove(items:Array<any>) {
		var viewModal = this._viewModal;
		var fileNames = items.map(item => {
			return item.text;
		}).join(",");

		var info = ConfirmationInfo.create("Are you sure to remove " + fileNames + " ?", 300);
		InteractionRequest.confirm(info, ret => {
			if(info.confirmed) {
				items.forEach(item => {
					viewModal.removeDoc(item.text);
				});
			}
		});
	}

	public execute(args:any) : boolean {
		var viewModal = this._viewModal;
		var docList = viewModal.getDocList();
		var choiceInfo = ChoiceInfo.create("Remove...", true, 300, 300);
		docList.forEach((item:string) => {
			choiceInfo.addOption(item);
		});

		InteractionRequest.choice(choiceInfo, (ret:ChoiceInfo) => {
			var arr = ret.value;
			if(arr && arr.length) {
				this.confirmRemove(arr);
			}
		});

		return true;
	}

	public static create(viewModal:ParticlesViewModal) : ICommand {
		return new CommandRemove(viewModal);
	}
};
