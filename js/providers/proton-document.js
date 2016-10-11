"use strict";
var proton = require("proton");
var ProtonDocument = (function () {
    function ProtonDocument() {
        var proton = new Proton();
        var emitter = new Proton.Emitter();
        //set Rate
        emitter.rate = new Proton.Rate(Proton.getSpan(10, 20), 0.1);
        //add Initialize
        emitter.addInitialize(new Proton.Radius(1, 12));
        emitter.addInitialize(new Proton.Life(2, 4));
        emitter.addInitialize(new Proton.Velocity(3, Proton.getSpan(0, 360), 'polar'));
        //add Behaviour
        emitter.addBehaviour(new Proton.Color('ff0000', 'random'));
        emitter.addBehaviour(new Proton.Alpha(1, 0));
        //set emitter position
        emitter.p.x = canvas.width / 2;
        emitter.p.y = canvas.height / 2;
        emitter.emit();
        //add emitter to the proton
        proton.addEmitter(emitter);
        // add canvas renderer
        var renderer = new Proton.Renderer('canvas', proton, canvas);
        renderer.start();
    }
    ProtonDocument.prototype.setProp = function (prop, value) {
        return true;
    };
    ProtonDocument.prototype.getProp = function (prop) {
        return null;
    };
    ProtonDocument.prototype.draw = function (ctx, rect) {
        console.log("ProtonDocument");
    };
    ProtonDocument.prototype.toJson = function () {
        return null;
    };
    ProtonDocument.prototype.fromJson = function (json) {
        return false;
    };
    ProtonDocument.create = function () {
        return new ProtonDocument();
    };
    return ProtonDocument;
}());
exports.ProtonDocument = ProtonDocument;
;
