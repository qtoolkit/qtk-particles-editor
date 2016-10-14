"use strict";
var qtk_1 = require("qtk");
var SaveDialog = (function () {
    function SaveDialog() {
    }
    SaveDialog.show = function (saveInfo, onOK) {
        qtk_1.MessageBox.showInput("Please Input File Name", "File Name", null, function (value) {
            return value;
        }, function (ret) {
            if (ret.length) {
                saveInfo.fileName = ret;
                onOK();
            }
        });
    };
    return SaveDialog;
}());
exports.SaveDialog = SaveDialog;
