"use strict";
var OpenInfo = (function () {
    function OpenInfo(choosed, options) {
        this.choosed = choosed;
        this.options = options;
    }
    OpenInfo.create = function (choosed, options) {
        return new OpenInfo(choosed, options);
    };
    return OpenInfo;
}());
exports.OpenInfo = OpenInfo;
;
