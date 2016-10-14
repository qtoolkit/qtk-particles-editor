import {ParticlesViewModal} from "./particles-view-modal";
import {ICommand, InteractionRequest, ChoiceInfo} from "qtk";

export class CommandNew implements ICommand {
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
				var template = arr[0].text;
				viewModal.createDoc(template);
			}
		});

		return true;
	}

	public static create(viewModal:ParticlesViewModal, templates:Array<string>) : ICommand {
		var choiceInfo = ChoiceInfo.create("Please choose a template", false, 300, 300);
		templates.forEach((item:string) => {
			choiceInfo.addOption(item);
		});

		return new CommandNew(viewModal, choiceInfo);
	}
};
