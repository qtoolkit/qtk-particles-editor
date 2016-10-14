"use strict";
var proton = require("proton");
function createProtonEmitter(proton, data) {
    var life = new Proton.Life(data.life.first, data.life.second);
    var radius = new Proton.Radius(data.radius.first, data.radius.second);
    var alpha = new Proton.Alpha(data.alpha.first, data.alpha.second);
    var scale = new Proton.Scale(data.scale.first, data.scale.second);
    var rate = new Proton.Rate(new Proton.Span(data.rateNum.first, data.rateNum.second), new Proton.Span(data.rateTime.first, data.rateTime.second));
    var mass = new Proton.Mass(data.mass.first, data.mass.second);
    var velocity = new Proton.Velocity(new Proton.Span(data.vRpan.first, data.vRpan.second), new Proton.Span(data.vThapan.first, data.vThapan.second), data.vType);
    var color = new Proton.Color('ff0000', 'random', Infinity, Proton.easeOutQuart);
    var randomDrift = new Proton.RandomDrift(data.driftPoint.x, data.driftPoint.y, data.driftDelay);
    var emitter = new Proton.Emitter();
    emitter.rate = rate;
    emitter.addInitialize(mass);
    emitter.addInitialize(radius);
    emitter.addInitialize(life);
    emitter.addInitialize(velocity);
    emitter.addBehaviour(randomDrift);
    emitter.addBehaviour(color);
    emitter.addBehaviour(scale);
    emitter.addBehaviour(alpha);
    emitter.p.x = data.position.x;
    emitter.p.y = data.position.y;
    emitter.emit();
    proton.addEmitter(emitter);
    return emitter;
}
exports.createProtonEmitter = createProtonEmitter;
//# sourceMappingURL=proton-wrapper.js.map