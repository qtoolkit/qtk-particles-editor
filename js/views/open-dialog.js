"use strict";
var qtk_1 = require("qtk");
var OpenDialog = (function () {
    function OpenDialog() {
    }
    OpenDialog.show = function (openInfo, onOK) {
        var data = openInfo.options.map(function (item) {
            return { text: item };
        });
        qtk_1.MessageBox.showChoice("Please Choose File Name", data, false, function (ret) {
            if (ret.length) {
                openInfo.choosed = ret[0].text;
            }
            onOK();
        });
    };
    return OpenDialog;
}());
exports.OpenDialog = OpenDialog;
