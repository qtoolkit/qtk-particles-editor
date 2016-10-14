"use strict";
var qtk_1 = require("qtk");
var CommandOpen = (function () {
    function CommandOpen(viewModal) {
        this._viewModal = viewModal;
    }
    CommandOpen.prototype.canExecute = function () {
        var viewModal = this._viewModal;
        var docList = viewModal.getDocList();
        return docList && docList.length > 0;
    };
    CommandOpen.prototype.execute = function (args) {
        var viewModal = this._viewModal;
        var docList = viewModal.getDocList();
        var choiceInfo = qtk_1.ChoiceInfo.create("Open...", false, 300, 300);
        docList.forEach(function (item) {
            choiceInfo.addOption(item);
        });
        qtk_1.InteractionRequest.choice(choiceInfo, function (ret) {
            var arr = ret.value;
            if (arr && arr.length) {
                var fileName = arr[0].text;
                viewModal.openDoc(fileName);
            }
        });
        return true;
    };
    CommandOpen.create = function (viewModal) {
        return new CommandOpen(viewModal);
    };
    return CommandOpen;
}());
exports.CommandOpen = CommandOpen;
;
//# sourceMappingURL=command-open.js.map