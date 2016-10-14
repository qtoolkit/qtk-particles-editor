"use strict";
var qtk_1 = require("qtk");
var CommandSave = (function () {
    function CommandSave(viewModal) {
        this._viewModal = viewModal;
        this._inputInfo = qtk_1.InputInfo.create("Please input file name:", null);
    }
    CommandSave.prototype.canExecute = function () {
        return true;
    };
    CommandSave.prototype.execute = function (args) {
        var viewModal = this._viewModal;
        var fileName = viewModal.fileName;
        if (!fileName) {
            qtk_1.InteractionRequest.input(this._inputInfo, function (ret) {
                if (ret.value) {
                    viewModal.saveDoc(ret.value);
                }
            });
        }
        else {
            viewModal.saveDoc(fileName);
            qtk_1.InteractionRequest.toast(qtk_1.ToastInfo.create("Save done."));
        }
        return true;
    };
    CommandSave.create = function (viewModal) {
        return new CommandSave(viewModal);
    };
    return CommandSave;
}());
exports.CommandSave = CommandSave;
;
//# sourceMappingURL=command-save.js.map