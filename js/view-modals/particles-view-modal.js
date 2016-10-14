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
        return this.docList;
    };
    ParticlesViewModal.prototype.getDocName = function () {
        return this.fileName;
    };
    ParticlesViewModal.prototype.getPropsDesc = function () {
        return this.doc.propsDesc;
    };
    ParticlesViewModal.prototype.saveDoc = function (fileName) {
        var data = JSON.stringify(this.doc.toJson(), null, "\t");
        this.fileName = fileName;
        this.storage.set(fileName, data);
        this.updateDocList();
    };
    /*
     * subclass should implement it.
     */
    ParticlesViewModal.prototype.createEmitter = function () {
    };
    ParticlesViewModal.prototype.createDoc = function (templateName) {
        this.doc.fromTemplate(templateName);
        this.data = this.doc.data;
        this.createEmitter();
        this.updateDocList();
    };
    ParticlesViewModal.prototype.openDoc = function (fileName) {
        var data = this.storage.get(fileName);
        var json = JSON.parse(data);
        this.doc.fromJson(json);
        this.data = this.doc.data;
        this.createEmitter();
        this.fileName = fileName;
        this.updateDocList();
    };
    ParticlesViewModal.prototype.removeDoc = function (fileName) {
        this.storage.remove(fileName);
        this.updateDocList();
    };
    ParticlesViewModal.prototype.getFormatList = function () {
        return ["json"];
    };
    ParticlesViewModal.prototype.exportDoc = function (format) {
        if (format.indexOf("json") >= 0) {
            return JSON.stringify(this.data, null, "\t");
        }
        return null;
    };
    ParticlesViewModal.prototype.setProp = function (path, value, converter, validationRule) {
        var result = _super.prototype.setProp.call(this, path, value, converter, validationRule);
        this.createEmitter();
        return result;
    };
    ParticlesViewModal.prototype.getTemplateList = function () {
        return this.doc.getTemplateList();
    };
    ParticlesViewModal.prototype.updateDocList = function () {
        this.docList = this.storage.getItems();
    };
    return ParticlesViewModal;
}(qtk_1.ViewModal));
exports.ParticlesViewModal = ParticlesViewModal;
;
//# sourceMappingURL=particles-view-modal.js.map