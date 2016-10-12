"use strict";
var qtk_1 = require("qtk");
var AboutDialog = (function () {
    function AboutDialog() {
    }
    AboutDialog.show = function (aboutInfo, onOK) {
        var json = [
            { type: "text-readonly", name: "Author", path: "author" },
            { type: "link", name: "Email", path: "email" },
            { type: "link", name: "Home", path: "home" },
            { type: "link", name: "Engine", path: "engine" },
        ];
        var propsDesc = qtk_1.PagePropsDesc.create("About", json);
        qtk_1.PropertyDialog.show(propsDesc, aboutInfo, onOK);
    };
    return AboutDialog;
}());
exports.AboutDialog = AboutDialog;
