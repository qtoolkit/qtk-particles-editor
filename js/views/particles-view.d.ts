import { IViewModal, Widget, Style } from "qtk";
export declare class ParticlesView extends Widget {
    protected _style: Style;
    protected viewModal: IViewModal;
    protected drawBackground(ctx: any, style: Style): Widget;
    getStyle(): Style;
    constructor();
    static TYPE: string;
    static create(options: any): ParticlesView;
}
