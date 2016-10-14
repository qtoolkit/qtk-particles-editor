"use strict";
var qtk_1 = require("qtk");
var CommandOpen = (function () {
    function CommandOpen(viewModal, choiceInfo) {
        this._viewModal = viewModal;
        this._choiceInfo = choiceInfo;
    }
    CommandOpen.prototype.canExecute = function () {
        return true;
    };
    CommandOpen.prototype.execute = function (args) {
        var viewModal = this._viewModal;
        qtk_1.InteractionRequest.choice(this._choiceInfo, function (ret) {
            var arr = ret.value;
            if (arr && arr.length) {
                var fileName = arr[0].text;
                viewModal.openDoc(fileName);
            }
        });
        return true;
    };
    CommandOpen.create = function (viewModal) {
        var docList = viewModal.getDocList();
        var choiceInfo = qtk_1.ChoiceInfo.create("Open...", false, 300, 300);
        docList.forEach(function (item) {
            choiceInfo.addOption(item);
        });
        return new CommandOpen(viewModal, choiceInfo);
    };
    return CommandOpen;
}());
exports.CommandOpen = CommandOpen;
;
//# sourceMappingURL=command-open.js.map