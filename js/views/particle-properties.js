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
    ParticleProperties.prototype.onCreated = function () {
        var _this = this;
        var viewModal = this.viewModal;
        var propsDesc = viewModal.getPropsDesc();
        this._style = qtk_1.Style.create();
        propsDesc.forEach(function (pageDesc) {
            var page = qtk_1.PropertyPage.create({ h: 400 });
            page.initWithPropsDesc(pageDesc.propsDesc);
            _this.addPage(pageDesc.title, page);
            page.bindData(viewModal);
        });
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
