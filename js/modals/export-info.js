"use strict";
var ExportInfo = (function () {
    function ExportInfo(choosed, options) {
        this.choosed = choosed;
        this.options = options;
    }
    ExportInfo.create = function (choosed, options) {
        return new ExportInfo(choosed, options);
    };
    return ExportInfo;
}());
exports.ExportInfo = ExportInfo;
;
