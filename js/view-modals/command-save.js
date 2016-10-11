"use strict";
var CommandSave = (function () {
    function CommandSave(viewModal) {
        this._viewModal = viewModal;
    }
    CommandSave.prototype.canExecute = function () {
        return true;
    };
    CommandSave.prototype.execute = function (args) {
        console.log("CommandSave");
        return true;
    };
    CommandSave.create = function (viewModal) {
        return new CommandSave(viewModal);
    };
    return CommandSave;
}());
exports.CommandSave = CommandSave;
;
