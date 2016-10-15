"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require("./particles-latest");
require("../../modals/cocos2d/templates");
var command_draw_1 = require("../command-draw");
var command_new_1 = require("../command-new");
var command_open_1 = require("../command-open");
var command_save_1 = require("../command-save");
var command_export_1 = require("../command-export");
var command_about_1 = require("../command-about");
var command_remove_1 = require("../command-remove");
var command_content_1 = require("../command-content");
var cocos2d_wrapper_1 = require("./cocos2d-wrapper");
var document_1 = require("../../modals/document");
var particles_view_modal_1 = require("../particles-view-modal");
var qtk_1 = require("qtk");
var iparticles_view_modal_1 = require("../iparticles-view-modal");
var Cocos2dViewModal = (function (_super) {
    __extends(Cocos2dViewModal, _super);
    function Cocos2dViewModal(storage) {
        _super.call(this, null);
        this.canvas = document.createElement('canvas');
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.storage = storage;
        this.registerCommands();
        this.registerConverters();
        this.doc = document_1.Document.create();
        this.createDoc("default");
        this.updateDocList();
    }
    Cocos2dViewModal.prototype.registerConverters = function () {
        this.registerValueConverter("radius", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("life", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("mass", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("point", qtk_1.Vector2Fixer.create(0, 1000, 0, 1000));
        this.registerValueConverter("scale", qtk_1.RangeFixer.create(0, 10, 0, 10, false));
        this.registerValueConverter("alpha", qtk_1.RangeFixer.create(0, 1, 0, 1, false));
        this.registerValueConverter("rate-num", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("rate-time", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("v-rpan", qtk_1.RangeFixer.create(0, 1000, 0, 1000, true));
        this.registerValueConverter("v-thapath", qtk_1.RangeFixer.create(-1000, 1000, -1000, 1000, true));
        this.registerValueConverter("delay", qtk_1.NumberFixer.create(0, 10));
    };
    Cocos2dViewModal.prototype.registerCommands = function () {
        this.registerCommand("draw", command_draw_1.CommandDraw.create(this.canvas));
        this.registerCommand("about", command_about_1.CommandAbout.create(this, "https://github.com/a-jie/Cocos2d"));
        this.registerCommand("content", command_content_1.CommandContent.create(this, "http://cocos2d.jpeer.at/index.html"));
        this.registerCommand("new", command_new_1.CommandNew.create(this, document_1.Document.getTemplateList()));
        this.registerCommand("open", command_open_1.CommandOpen.create(this));
        this.registerCommand("remove", command_remove_1.CommandRemove.create(this));
        this.registerCommand("save", command_save_1.CommandSave.create(this, false));
        this.registerCommand("save-as", command_save_1.CommandSave.create(this, true));
        this.registerCommand("export", command_export_1.CommandExport.create(this));
    };
    Cocos2dViewModal.prototype.createEmitter = function () {
        var data = this.data;
        this.particlesEmitter = cocos2d_wrapper_1.createCocos2dEmitter(this.particlesEmitter, data);
    };
    Cocos2dViewModal.create = function (options) {
        var viewModal = new Cocos2dViewModal(options.storage);
        function update() {
            var canvas = viewModal.canvas;
            var emitter = viewModal.particlesEmitter;
            if (emitter) {
                emitter.update(1000 / 60);
                var ctx = canvas.getContext("2d");
                emitter.draw(ctx);
            }
            requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        return viewModal;
    };
    Cocos2dViewModal.TYPE = "cocos2d";
    return Cocos2dViewModal;
}(particles_view_modal_1.ParticlesViewModal));
exports.Cocos2dViewModal = Cocos2dViewModal;
;
iparticles_view_modal_1.ParticlesViewModalFactory.register(Cocos2dViewModal.TYPE, Cocos2dViewModal.create);
//# sourceMappingURL=view-modal.js.map