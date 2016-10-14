"use strict";
var qtk_1 = require("qtk");
var CommandRemove = (function () {
    function CommandRemove(viewModal, choiceInfo) {
        this._viewModal = viewModal;
        this._choiceInfo = choiceInfo;
    }
    CommandRemove.prototype.canExecute = function () {
        return true;
    };
    CommandRemove.prototype.execute = function (args) {
        var viewModal = this._viewModal;
        qtk_1.InteractionRequest.choice(this._choiceInfo, function (ret) {
            var arr = ret.value;
            if (arr && arr.length) {
                var fileName = arr[0].text;
                viewModal.removeDoc(fileName);
            }
        });
        return true;
    };
    CommandRemove.create = function (viewModal) {
        var docList = viewModal.getDocList();
        var choiceInfo = qtk_1.ChoiceInfo.create("Remove...", false, 300, 300);
        docList.forEach(function (item) {
            choiceInfo.addOption(item);
        });
        return new CommandRemove(viewModal, choiceInfo);
    };
    return CommandRemove;
}());
exports.CommandRemove = CommandRemove;
;
