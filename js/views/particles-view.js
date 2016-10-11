"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var ParticlesView = (function (_super) {
    __extends(ParticlesView, _super);
    function ParticlesView() {
        _super.call(this, ParticlesView.TYPE);
        this._style = qtk_1.Style.create();
    }
    ParticlesView.prototype.drawBackground = function (ctx, style) {
        ctx.fillStyle = "#F6F6F6";
        ctx.fillRect(0, 0, this.w, this.h);
        this.viewModal.execCommand("draw", { ctx: ctx, rect: qtk_1.Rect.rect.init(0, 0, this.w, this.h) });
        this.requestRedraw();
        return this;
    };
    ParticlesView.prototype.getStyle = function () {
        return this._style;
    };
    ParticlesView.create = function (options) {
        var view = new ParticlesView();
        return view.reset(ParticlesView.TYPE, options);
    };
    ParticlesView.TYPE = "particles-view";
    return ParticlesView;
}(qtk_1.Widget));
exports.ParticlesView = ParticlesView;
;
