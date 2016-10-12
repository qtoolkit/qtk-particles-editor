"use strict";
var AboutInfo = (function () {
    function AboutInfo(author, email, home, engine) {
        this.author = author;
        this.email = email;
        this.home = home;
        this.engine = engine;
    }
    AboutInfo.create = function (author, email, home, engine) {
        return new AboutInfo(author, email, home, engine);
    };
    return AboutInfo;
}());
exports.AboutInfo = AboutInfo;
