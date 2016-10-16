import {TitleContent, PagePropsDesc, PropertyPage, PropertySheets, Style, Events} from "qtk";
import {IParticlesViewModal} from "../view-modals/iparticles-view-modal";

export class ParticleProperties extends PropertySheets {
	protected _style : Style;
	protected viewModal:IParticlesViewModal;

	public getStyle() : Style {
		return this._style;
	}

	protected createUI() {
		var viewModal = this.viewModal;
		var propsDesc = viewModal.getPropsDesc();
		this._style = Style.create(); 
		var titleW = viewModal.getPropTitleWidth();

		this.removeAllChildren();
		propsDesc.forEach((pageDesc:PagePropsDesc) => {
			var page = PropertyPage.create({titleW:titleW});
			page.initWithPropsDesc(pageDesc.propsDesc);
			var titlePage = this.addPage(pageDesc.title, page);
			page.bindData(viewModal);
			titlePage.collapsed = false;
		});
	}

	protected onCreated() {
		var viewModal = this.viewModal;
		viewModal.onChange((evt:Events.PropChangeEvent) => {
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
