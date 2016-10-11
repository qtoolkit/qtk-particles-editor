"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var Diagram = (function (_super) {
    __extends(Diagram, _super);
    function Diagram() {
        _super.apply(this, arguments);
    }
    Diagram.prototype.run = function () {
        this.init({
            sysThemeDataURL: "/www/assets/theme/default/theme.json",
            appThemeDataURL: "/www/assets/theme/default/demo.json"
        });
        return this;
    };
    Diagram.prototype.start = function () {
        console.log("start");
    };
    Diagram.run = function () {
        Diagram.app = new Diagram("diagram").run();
        return Diagram.app;
    };
    return Diagram;
}(qtk_1.Application));
exports.Diagram = Diagram;
;
