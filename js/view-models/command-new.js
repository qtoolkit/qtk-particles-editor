"use strict";
var qtk_1 = require("qtk");
var CommandNew = (function () {
    function CommandNew(viewModel, choiceInfo) {
        this._viewModel = viewModel;
        this._choiceInfo = choiceInfo;
    }
    CommandNew.prototype.canExecute = function () {
        return true;
    };
    CommandNew.prototype.execute = function (args) {
        var viewModel = this._viewModel;
        console.log("CommandNew");
        qtk_1.InteractionRequest.choice(this._choiceInfo, function (ret) {
            var arr = ret.value;
            if (arr && arr.length) {
                var template = arr[0].text;
                viewModel.createDoc(template);
            }
        });
        return true;
    };
    CommandNew.create = function (viewModel, templates) {
        var choiceInfo = qtk_1.ChoiceInfo.create("Please choose a template", false, 300, 300);
        templates.forEach(function (item) {
            choiceInfo.addOption(item);
        });
        return new CommandNew(viewModel, choiceInfo);
    };
    return CommandNew;
}());
exports.CommandNew = CommandNew;
;
//# sourceMappingURL=command-new.js.map