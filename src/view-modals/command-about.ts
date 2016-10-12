import {ICommand} from "qtk";
import {AboutInfo} from "../modals/about-info";
import {ParticlesViewModal} from "./particles-view-modal";

export class CommandAbout implements ICommand {
	protected _viewModal : ParticlesViewModal;
	protected _aboutInfo : AboutInfo;

	constructor(viewModal:ParticlesViewModal, aboutInfo:AboutInfo) {
		this._viewModal = viewModal;
		this._aboutInfo = aboutInfo;
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		console.log("CommandAbout")
		this._viewModal.sendViewRequest("help.about", function(aboutInfo) {
			console.log("About Closed");	
		}, this._aboutInfo);

		return true;
	}

	public static create(viewModal:ParticlesViewModal, engine:string) : ICommand {
		var aboutInfo = AboutInfo.create("Li XianJing", "xianjimli@hotmail.com", 
					"https://github.com/qtoolkit/qtk", engine);

		return new CommandAbout(viewModal, aboutInfo);
	}
};
