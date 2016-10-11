"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var MainMenuBar = (function (_super) {
    __extends(MainMenuBar, _super);
    function MainMenuBar() {
        _super.call(this);
    }
    MainMenuBar.prototype.onFileMenu = function (menu) {
        menu.w = 128;
        menu.addItem("Open", null).set({ dataBindingRule: { click: { command: "open" } } });
        menu.addItem("Save", null).set({ dataBindingRule: { click: { command: "save" } } });
        menu.bindData(this.viewModal);
    };
    MainMenuBar.prototype.onEditMenu = function (menu) {
        menu.w = 128;
        menu.addItem("Undo", null).set({ dataBindingRule: { click: { command: "undo" } } });
        menu.addItem("Redo", null).set({ dataBindingRule: { click: { command: "redo" } } });
        menu.bindData(this.viewModal);
    };
    MainMenuBar.prototype.createUI = function () {
        this.addItem("File", this.onFileMenu.bind(this));
        this.addItem("Edit", this.onEditMenu.bind(this));
    };
    MainMenuBar.create = function (options) {
        var menuBar = new MainMenuBar();
        menuBar.reset("menu-bar", options);
        menuBar.createUI();
        return menuBar;
    };
    return MainMenuBar;
}(qtk_1.MenuBar));
exports.MainMenuBar = MainMenuBar;
;
