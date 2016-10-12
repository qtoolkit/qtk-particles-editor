"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var qtk_2 = require("qtk");
var about_dialog_1 = require("./about-dialog");
var MainMenuBar = (function (_super) {
    __extends(MainMenuBar, _super);
    function MainMenuBar() {
        _super.apply(this, arguments);
    }
    MainMenuBar.prototype.onFileMenu = function (menu) {
        menu.w = 128;
        menu.addItem("New", null).set({ dataBindingRule: { click: { command: "new" } } });
        menu.addItem("Open", null).set({ dataBindingRule: { click: { command: "open" } } });
        menu.addItem("Save", null).set({ dataBindingRule: { click: { command: "save" } } });
        menu.addSpace();
        menu.addItem("Export", null).set({ dataBindingRule: { click: { command: "export" } } });
        menu.bindData(this.viewModal);
    };
    MainMenuBar.prototype.onHelpMenu = function (menu) {
        menu.w = 128;
        menu.addItem("Content", null).set({ dataBindingRule: { click: { command: "content" } } });
        menu.addItem("About", null).set({ dataBindingRule: { click: { command: "about" } } });
        menu.bindData(this.viewModal);
    };
    MainMenuBar.prototype.onEditMenu = function (menu) {
        menu.w = 128;
        menu.addItem("Undo", null).set({ dataBindingRule: { click: { command: "undo" } } });
        menu.addItem("Redo", null).set({ dataBindingRule: { click: { command: "redo" } } });
        menu.bindData(this.viewModal);
    };
    MainMenuBar.prototype.showAbout = function (evt) {
        about_dialog_1.AboutDialog.show(evt.payload, evt.returnResult.bind(evt));
    };
    MainMenuBar.prototype.showContent = function (evt) {
        var helpURL = evt.payload;
        window.open(helpURL, "_blank");
    };
    MainMenuBar.prototype.onCreated = function () {
        var _this = this;
        _super.prototype.onCreated.call(this);
        this.addLogo("https://qtoolkit.github.io/demos/assets/icons/@density/apple.png");
        this.addItem("File", this.onFileMenu.bind(this));
        this.addItem("Edit", this.onEditMenu.bind(this));
        this.addItem("Help", this.onHelpMenu.bind(this));
        this.viewModal.on(qtk_1.Events.SHOW_VIEW, function (evt) {
            var name = evt.name;
            switch (name) {
                case "help.about": {
                    _this.showAbout(evt);
                    break;
                }
                case "help.content": {
                    _this.showContent(evt);
                    break;
                }
            }
        });
    };
    MainMenuBar.create = function (options) {
        var menuBar = new MainMenuBar();
        menuBar.reset("menu-bar", options);
        return menuBar;
    };
    return MainMenuBar;
}(qtk_2.MenuBar));
exports.MainMenuBar = MainMenuBar;
;
