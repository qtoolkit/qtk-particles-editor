"use strict";
;
var IParticlesViewModalFactory = (function () {
    function IParticlesViewModalFactory() {
    }
    IParticlesViewModalFactory.register = function (type, creator) {
        IParticlesViewModalFactory.viewModals[type] = creator;
    };
    IParticlesViewModalFactory.create = function (type, options) {
        var creator = IParticlesViewModalFactory.viewModals[type];
        return creator(options);
    };
    IParticlesViewModalFactory.viewModals = {};
    return IParticlesViewModalFactory;
}());
exports.IParticlesViewModalFactory = IParticlesViewModalFactory;
