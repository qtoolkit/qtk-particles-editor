import {DrawInfo} from "../modals/draw-info"
import {IViewModal, Widget, Style, Rect} from "qtk";

export class ParticlesView extends Widget {
	protected _style : Style;
	protected viewModal : IViewModal;
	protected _drawInfo = DrawInfo.create();

	protected drawBackground(ctx:any, style:Style) : Widget {
		var viewModal = this.viewModal;

		ctx.fillStyle = viewModal.getProp("/backGroundColor") || "#F6F6F6";
		ctx.fillRect(0, 0, this.w, this.h);

		this._drawInfo.init(ctx, Rect.rect.init(0, 0, this.w, this.h));
		viewModal.execCommand("draw", this._drawInfo);
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
