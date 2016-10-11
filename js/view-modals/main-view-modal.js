"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var command_open_1 = require("./command-open");
var command_save_1 = require("./command-save");
var qtk_1 = require("qtk");
var qtk_2 = require("qtk");
var MainViewModal = (function (_super) {
    __extends(MainViewModal, _super);
    function MainViewModal(provider) {
        _super.call(this, null);
        this._provider = provider;
        this._document = this._provider.createDocument();
    }
    MainViewModal.prototype.setProp = function (path, value, converter, validationRule) {
        if (this._document) {
            this._document.setProp(path, value);
            this.notifyChange(qtk_1.Events.PROP_CHANGE, path, value);
        }
        return qtk_2.ValidationResult.validResult;
    };
    MainViewModal.prototype.getProp = function (path, converter) {
        if (this._document) {
            return this._document.getProp(path);
        }
        return null;
    };
    MainViewModal.prototype.getDocument = function () {
        return this._document;
    };
    MainViewModal.prototype.getPropsDesc = function () {
        return this._provider.getPropsDesc();
    };
    MainViewModal.prototype.init = function () {
        this.registerCommand("open", command_open_1.CommandOpen.create(this));
        this.registerCommand("save", command_save_1.CommandSave.create(this));
        return this;
    };
    MainViewModal.create = function (provider) {
        var viewModal = new MainViewModal(provider);
        return viewModal.init();
    };
    return MainViewModal;
}(qtk_2.ViewModal));
exports.MainViewModal = MainViewModal;
;
