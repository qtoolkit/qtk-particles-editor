"use strict";
var about_info_1 = require("../modals/about-info");
var CommandAbout = (function () {
    function CommandAbout(viewModal, aboutInfo) {
        this._viewModal = viewModal;
        this._aboutInfo = aboutInfo;
    }
    CommandAbout.prototype.canExecute = function () {
        return true;
    };
    CommandAbout.prototype.execute = function (args) {
        console.log("CommandAbout");
        this._viewModal.sendViewRequest("help.about", function (aboutInfo) {
            console.log("About Closed");
        }, this._aboutInfo);
        return true;
    };
    CommandAbout.create = function (viewModal, engine) {
        var aboutInfo = about_info_1.AboutInfo.create("Li XianJing", "xianjimli@hotmail.com", "https://github.com/qtoolkit/qtk", engine);
        return new CommandAbout(viewModal, aboutInfo);
    };
    return CommandAbout;
}());
exports.CommandAbout = CommandAbout;
;
