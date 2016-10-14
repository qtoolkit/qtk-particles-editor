import {ICommand} from "qtk";
import {ContentInfo} from "../modals/content-info";
import {ParticlesViewModal} from "./particles-view-modal";

export class CommandContent implements ICommand {
	protected _helpURL : string;
	protected _viewModal : ParticlesViewModal;

	constructor(viewModal:ParticlesViewModal, helpURL:string) {
		this._viewModal = viewModal;
		this._helpURL = helpURL;
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		console.log("CommandContent");
		window.open(this._helpURL, "_blank");
		return true;
	}

	public static create(viewModal:ParticlesViewModal, helpURL:string) : ICommand {
		return new CommandContent(viewModal, helpURL);
	}
};
