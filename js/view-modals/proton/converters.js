"use strict";
var qtk_1 = require("qtk");
function convertRange(value, fix) {
    var first = Math.max(0, +value.first);
    var second = Math.max(0, +value.second);
    if (fix) {
        return { first: Math.min(first, second), second: Math.max(first, second) };
    }
    else {
        return { first: first, second: second };
    }
}
function fixRange(value) {
    return convertRange(value, true);
}
function noChange(value) {
    return value;
}
var Converters = (function () {
    function Converters() {
    }
    Converters.init = function (viewModal) {
        viewModal.registerValueConverter("life", qtk_1.DelegateValueConverter.create(noChange, fixRange));
        viewModal.registerValueConverter("radius", qtk_1.DelegateValueConverter.create(noChange, fixRange));
    };
    return Converters;
}());
exports.Converters = Converters;
;
