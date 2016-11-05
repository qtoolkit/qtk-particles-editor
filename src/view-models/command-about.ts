import {ParticlesViewModel} from "./particles-view-model";
import {ICommand, InteractionRequest, PropsInfo, PagePropsDesc} from "qtk";

export class CommandAbout implements ICommand {
	protected _propsInfo : PropsInfo;
	protected _viewModel : ParticlesViewModel;

	constructor(viewModel:ParticlesViewModel, propsInfo:PropsInfo) {
		this._viewModel = viewModel;
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

	public static create(viewModel:ParticlesViewModel, engine:string) : ICommand {
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

		return new CommandAbout(viewModel, propsInfo);
	}
};
