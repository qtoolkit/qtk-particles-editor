"use strict";
var Storage = (function () {
    function Storage(prefix) {
        this._prefix = prefix + ".";
    }
    Storage.prototype.getKey = function (name) {
        return this._prefix + name;
    };
    Storage.prototype.save = function (name, data) {
        var key = this.getKey(name);
        localStorage.setItem(key, data);
    };
    Storage.prototype.remove = function (name) {
        var key = this.getKey(name);
        localStorage.removeItem(key);
        return true;
    };
    Storage.prototype.load = function (name) {
        var key = this.getKey(name);
        return localStorage.getItem(key);
    };
    Storage.prototype.getItems = function () {
        var n = localStorage.length;
        var items = [];
        var prefix = this._prefix;
        for (var i = 0; i < n; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(prefix) === 0) {
                items.push(key.substr(prefix.length));
            }
        }
        return items;
    };
    Storage.create = function (prefix) {
        return new Storage(prefix);
    };
    return Storage;
}());
exports.Storage = Storage;
;
