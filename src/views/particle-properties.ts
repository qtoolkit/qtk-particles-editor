import {PagePropsDesc, PropertyPage, PropertySheets, Style} from "qtk";
import {IParticlesViewModal} from "../view-modals/iparticles-view-modal";

export class ParticleProperties extends PropertySheets {
	protected _style : Style;
	protected viewModal:IParticlesViewModal;

	public getStyle() : Style {
		return this._style;
	}

	protected onCreated() {
		var viewModal = this.viewModal;
		var propsDesc = viewModal.getPropsDesc();
		
		this._style = Style.create(); 
		propsDesc.forEach((pageDesc:PagePropsDesc) => {
			var page = PropertyPage.create({h:400});
			page.initWithPropsDesc(pageDesc.propsDesc);
			this.addPage(pageDesc.title, page);
			page.bindData(viewModal);
		});
	}

	public static TYPE = "particles-view";
	public static create(options:any) : ParticleProperties {
		var view:ParticleProperties = new ParticleProperties();
		
		view.reset(ParticleProperties.TYPE, options);

		return view;
	}
};