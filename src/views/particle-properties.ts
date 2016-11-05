import {TitleContent, PagePropsDesc, PropertyPage, PropertySheets, Style, Events} from "qtk";
import {IParticlesViewModel} from "../view-models/iparticles-view-model";

export class ParticleProperties extends PropertySheets {
	protected _style : Style;
	protected viewModel:IParticlesViewModel;

	public getStyle() : Style {
		return this._style;
	}

	protected createUI() {
		var viewModel = this.viewModel;
		var propsDesc = viewModel.getPropsDesc();
		this._style = Style.create(); 
		var titleW = viewModel.getPropTitleWidth();

		this.removeAllChildren();
		propsDesc.forEach((pageDesc:PagePropsDesc) => {
			var page = PropertyPage.create({titleW:titleW});
			page.initWithPropsDesc(pageDesc.propsDesc);
			var titlePage = this.addPage(pageDesc.title, page);
			page.bindData(viewModel);
			titlePage.collapsed = false;
		});
	}

	protected onCreated() {
		var viewModel = this.viewModel;
		viewModel.onChange((evt:Events.PropChangeEvent) => {
			if(evt.prop === "/") {
				this.createUI();
			}
		});
		this.createUI();
	}

	public static TYPE = "particles-view";
	public static create(options:any) : ParticleProperties {
		var view:ParticleProperties = new ParticleProperties();
		
		view.reset(ParticleProperties.TYPE, options);

		return view;
	}
};
