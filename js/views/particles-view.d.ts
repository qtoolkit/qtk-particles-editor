import { DrawInfo } from "../modals/draw-info";
import { IViewModal, Widget, Style } from "qtk";
export declare class ParticlesView extends Widget {
    protected _style: Style;
    protected viewModal: IViewModal;
    protected _drawInfo: DrawInfo;
    protected drawBackground(ctx: any, style: Style): Widget;
    getStyle(): Style;
    constructor();
    static TYPE: string;
    static create(options: any): ParticlesView;
}
