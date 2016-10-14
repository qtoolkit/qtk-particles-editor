var saveAs = require('save-as').default;

import {ParticlesViewModal} from "./particles-view-modal";
import {ICommand, InteractionRequest, ChoiceInfo} from "qtk";

export class CommandExport implements ICommand {
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
				var format = arr[0].text;
				var result = viewModal.exportDoc(format);
				if(result) {
					let blob = new Blob([result], { type: 'text/plain;charset=utf-8' })
					saveAs(blob, 'particles.json')
				}
			}
		});
		return true;
	}

	public static create(viewModal:ParticlesViewModal) : ICommand {
		var formatList = viewModal.getFormatList();
		var choiceInfo = ChoiceInfo.create("Export as...", false, 300, 200);
		formatList.forEach((item:string) => {
			choiceInfo.addOption(item);
		});

		return new CommandExport(viewModal, choiceInfo);
	}
};
