"use strict";
var qtk_1 = require("qtk");
var CommandRemove = (function () {
    function CommandRemove(viewModal) {
        this._viewModal = viewModal;
    }
    CommandRemove.prototype.canExecute = function () {
        var viewModal = this._viewModal;
        var docList = viewModal.getDocList();
        return docList && docList.length > 0;
    };
    CommandRemove.prototype.confirmRemove = function (items) {
        var viewModal = this._viewModal;
        var fileNames = items.map(function (item) {
            return item.text;
        }).join(",");
        var info = qtk_1.ConfirmationInfo.create("Are you sure to remove " + fileNames + " ?", 300);
        qtk_1.InteractionRequest.confirm(info, function (ret) {
            if (info.confirmed) {
                items.forEach(function (item) {
                    viewModal.removeDoc(item.text);
                });
            }
        });
    };
    CommandRemove.prototype.execute = function (args) {
        var _this = this;
        var viewModal = this._viewModal;
        var docList = viewModal.getDocList();
        var choiceInfo = qtk_1.ChoiceInfo.create("Remove...", true, 300, 300);
        docList.forEach(function (item) {
            choiceInfo.addOption(item);
        });
        qtk_1.InteractionRequest.choice(choiceInfo, function (ret) {
            var arr = ret.value;
            if (arr && arr.length) {
                _this.confirmRemove(arr);
            }
        });
        return true;
    };
    CommandRemove.create = function (viewModal) {
        return new CommandRemove(viewModal);
    };
    return CommandRemove;
}());
exports.CommandRemove = CommandRemove;
;
//# sourceMappingURL=command-remove.js.map