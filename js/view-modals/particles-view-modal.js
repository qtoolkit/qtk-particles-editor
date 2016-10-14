"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var ParticlesViewModal = (function (_super) {
    __extends(ParticlesViewModal, _super);
    function ParticlesViewModal() {
        _super.apply(this, arguments);
    }
    ParticlesViewModal.prototype.getDocList = function () {
        return null;
    };
    ParticlesViewModal.prototype.getFormatList = function () {
        return ["json", "plist", "javascript"];
    };
    ParticlesViewModal.prototype.saveDoc = function (fileName) {
    };
    ParticlesViewModal.prototype.createDoc = function (templateName) {
    };
    ParticlesViewModal.prototype.openDoc = function (fileName) {
    };
    ParticlesViewModal.prototype.removeDoc = function (fileName) {
    };
    ParticlesViewModal.prototype.newWithTemplate = function (name) {
    };
    ParticlesViewModal.prototype.getPropsDesc = function () {
        return null;
    };
    return ParticlesViewModal;
}(qtk_1.ViewModal));
exports.ParticlesViewModal = ParticlesViewModal;
;
