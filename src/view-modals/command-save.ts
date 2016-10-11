
import {ICommand, IViewModal} from "qtk";

export class CommandSave implements ICommand {
	protected _viewModal : IViewModal;

	constructor(viewModal:IViewModal) {
		this._viewModal = viewModal;
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		console.log("CommandSave")
		return true;
	}

	public static create(viewModal:IViewModal) : ICommand {
		return new CommandSave(viewModal);
	}
};
