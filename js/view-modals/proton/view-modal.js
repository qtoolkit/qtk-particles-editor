"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var proton = require("proton");
var document_1 = require("./document");
var converters_1 = require("./converters");
var command_draw_1 = require("./command-draw");
var command_new_1 = require("../command-new");
var command_open_1 = require("../command-open");
var command_save_1 = require("../command-save");
var command_export_1 = require("../command-export");
var command_about_1 = require("../command-about");
var command_remove_1 = require("../command-remove");
var command_content_1 = require("../command-content");
var proton_wrapper_1 = require("./proton-wrapper");
var qtk_1 = require("qtk");
var particles_view_modal_1 = require("../particles-view-modal");
var iparticles_view_modal_1 = require("../iparticles-view-modal");
var ProtonViewModal = (function (_super) {
    __extends(ProtonViewModal, _super);
    function ProtonViewModal(doc, storage) {
        _super.call(this, doc.data);
        this.createEmitter();
        this.storage = storage;
        this.doc = doc;
        converters_1.Converters.init(this);
        this.registerCommands();
    }
    ProtonViewModal.prototype.getDocList = function () {
        return this.storage.getItems();
    };
    ProtonViewModal.prototype.saveDoc = function (fileName) {
        var data = JSON.stringify(this.doc.toJson(), null, "\t");
        this.storage.set(fileName, data);
        this.fileName = fileName;
    };
    ProtonViewModal.prototype.createDoc = function (templateName) {
        var doc = document_1.Document.createFromTemplate("default");
        this.doc = doc;
        this.data = this.doc.data;
        this.createEmitter();
        this.notifyChange(qtk_1.Events.PROP_CHANGE, "/", null);
    };
    ProtonViewModal.prototype.removeDoc = function (fileName) {
        this.storage.remove(fileName);
    };
    ProtonViewModal.prototype.openDoc = function (fileName) {
        var data = this.storage.get(fileName);
        var json = JSON.parse(data);
        this.doc.fromJson(json);
        this.data = this.doc.data;
        this.createEmitter();
        this.fileName = fileName;
        this.notifyChange(qtk_1.Events.PROP_CHANGE, "/", null);
    };
    ProtonViewModal.prototype.getPropsDesc = function () {
        return this.doc.propsDesc;
    };
    ProtonViewModal.prototype.setProp = function (path, value, converter, validationRule) {
        var result = _super.prototype.setProp.call(this, path, value, converter, validationRule);
        this.createEmitter();
        return result;
    };
    ProtonViewModal.prototype.registerCommands = function () {
        this.registerCommand("draw", command_draw_1.CommandDraw.create(this));
        this.registerCommand("about", command_about_1.CommandAbout.create(this, "https://github.com/a-jie/Proton"));
        this.registerCommand("content", command_content_1.CommandContent.create(this, "http://proton.jpeer.at/index.html"));
        this.registerCommand("new", command_new_1.CommandNew.create(this, this.getDocumentList()));
        this.registerCommand("open", command_open_1.CommandOpen.create(this));
        this.registerCommand("remove", command_remove_1.CommandRemove.create(this));
        this.registerCommand("save", command_save_1.CommandSave.create(this));
        this.registerCommand("export", command_export_1.CommandExport.create(this));
    };
    ProtonViewModal.prototype.createEmitter = function () {
        var data = this.data;
        var proton = ProtonViewModal.proton;
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.width = 400;
            this.canvas.height = 400;
        }
        if (!this.renderer) {
            var renderer = new Proton.Renderer('canvas', proton, this.canvas);
            this.renderer = renderer;
            renderer.start();
        }
        var emitter = this.protonEmitter;
        if (emitter) {
            proton.removeEmitter(emitter);
            emitter.destroy();
        }
        this.protonEmitter = proton_wrapper_1.createProtonEmitter(proton, this.canvas, data);
    };
    ProtonViewModal.prototype.getDocumentList = function () {
        return document_1.Document.templateNames;
    };
    ProtonViewModal.create = function (options) {
        if (!ProtonViewModal.proton) {
            ProtonViewModal.proton = new Proton();
            requestAnimationFrame(ProtonViewModal.update);
        }
        var doc = document_1.Document.createFromTemplate("default");
        var viewModal = new ProtonViewModal(doc, options.storage);
        return viewModal;
    };
    ProtonViewModal.update = function () {
        ProtonViewModal.proton.update();
        requestAnimationFrame(ProtonViewModal.update);
    };
    ProtonViewModal.TYPE = "proton";
    ProtonViewModal.proton = null;
    return ProtonViewModal;
}(particles_view_modal_1.ParticlesViewModal));
exports.ProtonViewModal = ProtonViewModal;
;
iparticles_view_modal_1.ParticlesViewModalFactory.register(ProtonViewModal.TYPE, ProtonViewModal.create);
//# sourceMappingURL=view-modal.js.map