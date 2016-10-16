"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var document_1 = require("../modals/document");
var qtk_1 = require("qtk");
var ParticlesViewModal = (function (_super) {
    __extends(ParticlesViewModal, _super);
    function ParticlesViewModal(data, type, storage) {
        _super.call(this, data);
        this.type = type;
        this.storage = storage;
        this.canvas = document.createElement('canvas');
        this.registerCommands();
        this.registerConverters();
        this.doc = document_1.Document.create();
        this.loadTemp();
        var me = this;
        window.onunload = function () {
            me.saveTemp();
        };
    }
    ParticlesViewModal.prototype.onDocReplaced = function () {
    };
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
    ParticlesViewModal.prototype.syncData = function (data) {
        this.data = data;
        this.createEmitter();
        this.updateDocList();
        this.onDocReplaced();
    };
    ParticlesViewModal.prototype.createDoc = function (templateName) {
        this.fileName = null;
        this.doc.fromTemplate(templateName);
        this.syncData(this.doc.data);
    };
    ParticlesViewModal.prototype.loadData = function (json) {
        this.doc.fromJson(json);
        this.syncData(this.doc.data);
    };
    ParticlesViewModal.prototype.openDoc = function (fileName) {
        this.fileName = fileName;
        var data = this.storage.get(fileName);
        var json = JSON.parse(data);
        this.loadData(json);
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
    ParticlesViewModal.prototype.getPropTitleWidth = function () {
        return "30%";
    };
    ParticlesViewModal.prototype.saveTemp = function () {
        var docInfo = {
            fileName: this.fileName,
            doc: this.doc.toJson()
        };
        var data = JSON.stringify(docInfo, null, "\t");
        var key = "temp." + this.type;
        localStorage.setItem(key, data);
    };
    ParticlesViewModal.prototype.loadTemp = function () {
        var key = "temp." + this.type;
        var str = localStorage.getItem(key);
        if (str) {
            var data = JSON.parse(str);
            this.fileName = data.fileName;
            this.loadData(data.doc);
        }
        else {
            this.createDoc("default");
        }
    };
    return ParticlesViewModal;
}(qtk_1.ViewModal));
exports.ParticlesViewModal = ParticlesViewModal;
;
//# sourceMappingURL=particles-view-modal.js.map