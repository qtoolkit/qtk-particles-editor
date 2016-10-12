"use strict";
var CommandContent = (function () {
    function CommandContent(viewModal, helpURL) {
        this._viewModal = viewModal;
        this._helpURL = helpURL;
    }
    CommandContent.prototype.canExecute = function () {
        return true;
    };
    CommandContent.prototype.execute = function (args) {
        console.log("CommandContent");
        this._viewModal.sendViewRequest("help.content", null, this._helpURL);
        return true;
    };
    CommandContent.create = function (viewModal, helpURL) {
        return new CommandContent(viewModal, helpURL);
    };
    return CommandContent;
}());
exports.CommandContent = CommandContent;
;