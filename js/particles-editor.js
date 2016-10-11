"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var main_window_1 = require("./views/main-window");
var view_modal_1 = require("./view-modals/proton/view-modal");
var iparticles_view_modal_1 = require("./view-modals/iparticles-view-modal");
var themeDataURL = "https://qtoolkit.github.io/demos/assets/theme/default/theme.json";
var ParticlesEditor = (function (_super) {
    __extends(ParticlesEditor, _super);
    function ParticlesEditor() {
        _super.apply(this, arguments);
    }
    ParticlesEditor.prototype.onReady = function () {
        var vp = this.getViewPort();
        var viewModal = iparticles_view_modal_1.ParticlesViewModalFactory.create(view_modal_1.ProtonViewModal.TYPE);
        this.mainWindow = main_window_1.MainWindow.create({ w: vp.w, h: vp.h, app: this, viewModal: viewModal });
    };
    ParticlesEditor.run = function () {
        var app = new ParticlesEditor("particles-editor");
        app.init({ sysThemeDataURL: themeDataURL });
        app.run();
        return app;
    };
    return ParticlesEditor;
}(qtk_1.Application));
exports.ParticlesEditor = ParticlesEditor;
;
