"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var ProtonEditor = (function (_super) {
    __extends(ProtonEditor, _super);
    function ProtonEditor() {
        _super.apply(this, arguments);
    }
    ProtonEditor.prototype.run = function () {
        this.init({
            sysThemeDataURL: "/www/assets/theme/default/theme.json",
            appThemeDataURL: "/www/assets/theme/default/demo.json"
        });
        return this;
    };
    ProtonEditor.prototype.start = function () {
        console.log("start");
    };
    ProtonEditor.run = function () {
        ProtonEditor.app = new ProtonEditor("diagram").run();
        return ProtonEditor.app;
    };
    return ProtonEditor;
}(qtk_1.Application));
exports.ProtonEditor = ProtonEditor;
;
