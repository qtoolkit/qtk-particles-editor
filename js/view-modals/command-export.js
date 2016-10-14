"use strict";
var qtk_1 = require("qtk");
var CommandExport = (function () {
    function CommandExport(viewModal, choiceInfo) {
        this._viewModal = viewModal;
        this._choiceInfo = choiceInfo;
    }
    CommandExport.prototype.canExecute = function () {
        return true;
    };
    CommandExport.prototype.execute = function (args) {
        var viewModal = this._viewModal;
        qtk_1.InteractionRequest.choice(this._choiceInfo, function (ret) {
            var arr = ret.value;
            if (arr && arr.length) {
                var format = arr[0].text;
            }
        });
        return true;
    };
    CommandExport.create = function (viewModal) {
        var formatList = viewModal.getFormatList();
        var choiceInfo = qtk_1.ChoiceInfo.create("Export as...", false, 300, 200);
        formatList.forEach(function (item) {
            choiceInfo.addOption(item);
        });
        return new CommandExport(viewModal, choiceInfo);
    };
    return CommandExport;
}());
exports.CommandExport = CommandExport;
;