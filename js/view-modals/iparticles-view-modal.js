"use strict";
;
var ParticlesViewModalFactory = (function () {
    function ParticlesViewModalFactory() {
    }
    ParticlesViewModalFactory.register = function (type, creator) {
        ParticlesViewModalFactory.viewModals[type] = creator;
    };
    ParticlesViewModalFactory.create = function (type, options) {
        var creator = ParticlesViewModalFactory.viewModals[type];
        return creator(options);
    };
    ParticlesViewModalFactory.viewModals = {};
    return ParticlesViewModalFactory;
}());
exports.ParticlesViewModalFactory = ParticlesViewModalFactory;
//# sourceMappingURL=iparticles-view-modal.js.map