"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropDesc = (function () {
    function PropDesc() {
    }
    return PropDesc;
}());
exports.PropDesc = PropDesc;
;
var NumberPropDesc = (function (_super) {
    __extends(NumberPropDesc, _super);
    function NumberPropDesc() {
        _super.apply(this, arguments);
    }
    NumberPropDesc.create = function (name, displayName, desc, defValue, min, max) {
        var desc = new NumberPropDesc();
        desc.type = NumberPropDesc.TYPE;
        desc.min = min;
        desc.max = max;
        desc.name = name;
        desc.desc = desc;
        desc.defValue = defValue;
        desc.displayName = displayName;
        return desc;
    };
    NumberPropDesc.TYPE = "number";
    return NumberPropDesc;
}(PropDesc));
exports.NumberPropDesc = NumberPropDesc;
;
var PropsDesc = (function () {
    function PropsDesc() {
    }
    PropsDesc.prototype.parse = function (json) {
        var items = {};
        for (var name in json) {
            var data = json[name];
            if (data.type === NumberPropDesc.TYPE) {
                var desc = NumberPropDesc.create(data.name, data.displayName, data.desc, data.defValue, data.min, data.max);
            }
        }
        this._items = items;
        return this;
    };
    PropsDesc.create = function (json) {
        var propsDesc = new PropsDesc();
        return propsDesc.parse(json);
    };
    return PropsDesc;
}());
exports.PropsDesc = PropsDesc;
;
