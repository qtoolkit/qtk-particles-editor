import {ParticlesViewModal} from "./particles-view-modal";
import {ICommand, InteractionRequest, PropsInfo, PagePropsDesc} from "qtk";

export class CommandAbout implements ICommand {
	protected _propsInfo : PropsInfo;
	protected _viewModal : ParticlesViewModal;

	constructor(viewModal:ParticlesViewModal, propsInfo:PropsInfo) {
		this._viewModal = viewModal;
		this._propsInfo = propsInfo;
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		InteractionRequest.props(this._propsInfo, function(ret) {
		});

		return true;
	}

	public static create(viewModal:ParticlesViewModal, engine:string) : ICommand {
		var data = {
			author: "Li XianJing",
			email: "xianjimli@hotmail.com",
			home: "https://github.com/qtoolkit/qtk",
			engine : engine
		};
		
		var descJson = [
			{type:"text-readonly", name:"Author", path:"author"},
			{type:"link", name:"Email", path:"email"},
			{type:"link", name:"Home", path:"home"},
			{type:"link", name:"Engine", path:"engine"},
		];

		var pagePropsDesc = PagePropsDesc.create("About", descJson);
		var propsInfo = PropsInfo.create(pagePropsDesc, data, false, 300);

		return new CommandAbout(viewModal, propsInfo);
	}
};
