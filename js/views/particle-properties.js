"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var ParticleProperties = (function (_super) {
    __extends(ParticleProperties, _super);
    function ParticleProperties() {
        _super.apply(this, arguments);
    }
    ParticleProperties.prototype.getStyle = function () {
        return this._style;
    };
    ParticleProperties.prototype.createUI = function () {
        var _this = this;
        var viewModal = this.viewModal;
        var propsDesc = viewModal.getPropsDesc();
        this._style = qtk_1.Style.create();
        this.removeAllChildren();
        propsDesc.forEach(function (pageDesc) {
            var page = qtk_1.PropertyPage.create({ titleW: "40%" });
            page.initWithPropsDesc(pageDesc.propsDesc);
            var titlePage = _this.addPage(pageDesc.title, page);
            page.bindData(viewModal);
            titlePage.collapsed = false;
        });
    };
    ParticleProperties.prototype.onCreated = function () {
        var _this = this;
        var viewModal = this.viewModal;
        viewModal.onChange(function (evt) {
            if (evt.prop === "/") {
                _this.createUI();
            }
        });
        this.createUI();
    };
    ParticleProperties.create = function (options) {
        var view = new ParticleProperties();
        view.reset(ParticleProperties.TYPE, options);
        return view;
    };
    ParticleProperties.TYPE = "particles-view";
    return ParticleProperties;
}(qtk_1.PropertySheets));
exports.ParticleProperties = ParticleProperties;
;
//# sourceMappingURL=particle-properties.js.map