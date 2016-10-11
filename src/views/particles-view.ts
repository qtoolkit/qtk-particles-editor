import {IViewModal, Widget, Style, Rect} from "qtk";

export class ParticlesView extends Widget {
	protected _style : Style;
	protected viewModal : IViewModal;

	protected drawBackground(ctx:any, style:Style) : Widget {
		ctx.fillStyle = "#F6F6F6";
		ctx.fillRect(0, 0, this.w, this.h);
		this.viewModal.execCommand("draw", {ctx:ctx, rect:Rect.rect.init(0, 0, this.w, this.h)}); 
		this.requestRedraw();

		return this;
	}

	public getStyle() : Style {
		return this._style;
	}

	constructor() {
		super(ParticlesView.TYPE);
		this._style = Style.create(); 
	}

	public static TYPE = "particles-view";
	public static create(options:any) : ParticlesView {
		var view = new ParticlesView();

		return <ParticlesView>view.reset(ParticlesView.TYPE, options);
	}
};
