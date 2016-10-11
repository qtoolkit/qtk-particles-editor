"use strict";
var CommandOpen = (function () {
    function CommandOpen(viewModal) {
        this._viewModal = viewModal;
    }
    CommandOpen.prototype.canExecute = function () {
        return true;
    };
    CommandOpen.prototype.execute = function (args) {
        console.log("CommandOpen");
        return true;
    };
    CommandOpen.create = function (viewModal) {
        return new CommandOpen(viewModal);
    };
    return CommandOpen;
}());
exports.CommandOpen = CommandOpen;
;
