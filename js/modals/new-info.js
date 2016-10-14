"use strict";
var NewInfo = (function () {
    function NewInfo(options) {
        this.options = options;
        this.templateName = null;
    }
    NewInfo.create = function (options) {
        return new NewInfo(options);
    };
    return NewInfo;
}());
exports.NewInfo = NewInfo;
;
