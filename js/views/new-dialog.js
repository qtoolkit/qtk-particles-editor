"use strict";
var qtk_1 = require("qtk");
var NewDialog = (function () {
    function NewDialog() {
    }
    NewDialog.show = function (newInfo, onOK) {
        var data = newInfo.options.map(function (item) {
            return { text: item };
        });
        qtk_1.MessageBox.showChoice("Please Choose Template", data, false, function (ret) {
            if (ret.length) {
                newInfo.templateName = ret[0].text;
            }
            onOK();
        });
    };
    return NewDialog;
}());
exports.NewDialog = NewDialog;
