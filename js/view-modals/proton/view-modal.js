"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var proton = require("proton");
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
var document_1 = require("../../modals/document");
require("../../modals/proton/templates");
var particles_view_modal_1 = require("../particles-view-modal");
var iparticles_view_modal_1 = require("../iparticles-view-modal");
var ProtonViewModal = (function (_super) {
    __extends(ProtonViewModal, _super);
    function ProtonViewModal(storage) {
        _super.call(this, null);
        this.canvas = document.createElement('canvas');
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.storage = storage;
        converters_1.Converters.init(this);
        this.registerCommands();
        this.doc = document_1.Document.create();
        this.createDoc("default");
        this.updateDocList();
    }
    ProtonViewModal.prototype.registerCommands = function () {
        this.registerCommand("draw", command_draw_1.CommandDraw.create(this.canvas));
        this.registerCommand("about", command_about_1.CommandAbout.create(this, "https://github.com/a-jie/Proton"));
        this.registerCommand("content", command_content_1.CommandContent.create(this, "http://proton.jpeer.at/index.html"));
        this.registerCommand("new", command_new_1.CommandNew.create(this, document_1.Document.getTemplateList()));
        this.registerCommand("open", command_open_1.CommandOpen.create(this));
        this.registerCommand("remove", command_remove_1.CommandRemove.create(this));
        this.registerCommand("save", command_save_1.CommandSave.create(this, false));
        this.registerCommand("save-as", command_save_1.CommandSave.create(this, true));
        this.registerCommand("export", command_export_1.CommandExport.create(this));
    };
    ProtonViewModal.prototype.createEmitter = function () {
        var data = this.data;
        var proton = ProtonViewModal.proton;
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
        this.protonEmitter = proton_wrapper_1.createProtonEmitter(proton, data);
    };
    ProtonViewModal.update = function () {
        ProtonViewModal.proton.update();
        requestAnimationFrame(ProtonViewModal.update);
    };
    ProtonViewModal.create = function (options) {
        if (!ProtonViewModal.proton) {
            ProtonViewModal.proton = new Proton();
            requestAnimationFrame(ProtonViewModal.update);
        }
        return new ProtonViewModal(options.storage);
    };
    ProtonViewModal.TYPE = "proton";
    ProtonViewModal.proton = null;
    return ProtonViewModal;
}(particles_view_modal_1.ParticlesViewModal));
exports.ProtonViewModal = ProtonViewModal;
;
iparticles_view_modal_1.ParticlesViewModalFactory.register(ProtonViewModal.TYPE, ProtonViewModal.create);
//# sourceMappingURL=view-modal.js.map