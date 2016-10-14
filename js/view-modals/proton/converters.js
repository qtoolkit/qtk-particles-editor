"use strict";
var qtk_1 = require("qtk");
function convertPoint(value) {
    return { x: Math.max(0, +value.x), y: Math.max(0, +value.y) };
}
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
        viewModal.registerValueConverter("mass", qtk_1.DelegateValueConverter.create(noChange, fixRange));
        viewModal.registerValueConverter("point", qtk_1.DelegateValueConverter.create(noChange, convertPoint));
        viewModal.registerValueConverter("scale", qtk_1.DelegateValueConverter.create(noChange, convertRange));
        viewModal.registerValueConverter("alpha", qtk_1.DelegateValueConverter.create(noChange, convertRange));
    };
    return Converters;
}());
exports.Converters = Converters;
;
//# sourceMappingURL=converters.js.map