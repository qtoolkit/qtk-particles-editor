"use strict";
var qtk_1 = require("qtk");
var CommandNew = (function () {
    function CommandNew(viewModal, choiceInfo) {
        this._viewModal = viewModal;
        this._choiceInfo = choiceInfo;
    }
    CommandNew.prototype.canExecute = function () {
        return true;
    };
    CommandNew.prototype.execute = function (args) {
        var viewModal = this._viewModal;
        qtk_1.InteractionRequest.choice(this._choiceInfo, function (ret) {
            var arr = ret.value;
            if (arr && arr.length) {
                var template = arr[0].text;
                viewModal.createDoc(template);
            }
        });
        return true;
    };
    CommandNew.create = function (viewModal, templates) {
        var choiceInfo = qtk_1.ChoiceInfo.create("Please choose a template", false, 300, 300);
        templates.forEach(function (item) {
            choiceInfo.addOption(item);
        });
        return new CommandNew(viewModal, choiceInfo);
    };
    return CommandNew;
}());
exports.CommandNew = CommandNew;
;
