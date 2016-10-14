"use strict";
var ContentInfo = (function () {
    function ContentInfo(helpURL) {
        this.helpURL = helpURL;
    }
    ContentInfo.create = function (helpURL) {
        return new ContentInfo(helpURL);
    };
    return ContentInfo;
}());
exports.ContentInfo = ContentInfo;
