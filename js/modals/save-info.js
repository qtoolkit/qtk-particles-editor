"use strict";
var SaveInfo = (function () {
    function SaveInfo() {
        this.fileName = null;
    }
    SaveInfo.create = function () {
        return new SaveInfo();
    };
    return SaveInfo;
}());
exports.SaveInfo = SaveInfo;
