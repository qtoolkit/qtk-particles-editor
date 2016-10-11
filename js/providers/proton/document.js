"use strict";
var qtk_1 = require("qtk");
var proton = require("proton");
var ProtonDocument = (function () {
    function ProtonDocument() {
        this.data = null;
        this.prepareDefaultData();
        this.createEmitter();
    }
    ProtonDocument.prototype.copyRange = function (to, value, fix) {
        var first = Math.max(0, +value.first);
        var second = Math.max(0, +value.second);
        if (fix) {
            to.first = Math.min(first, second);
            to.second = Math.max(first, second);
        }
        else {
            to.first = first;
            to.second = second;
        }
    };
    ProtonDocument.prototype.getProp = function (path) {
        var data = this.data;
        switch (path) {
            case "/life": {
                return data.life;
            }
            case "/radius": {
                return data.radius;
            }
            case "/alpha": {
                return data.alpha;
            }
            case "/scale": {
                return data.scale;
            }
            case "/drift.point": {
                return data.driftPoint;
            }
            case "/drift.delay": {
                return data.driftDelay;
            }
        }
    };
    ProtonDocument.prototype.setProp = function (path, value) {
        var data = this.data;
        switch (path) {
            case "/life": {
                this.copyRange(data.life, value, true);
                break;
            }
            case "/radius": {
                this.copyRange(data.radius, value, true);
                break;
            }
            case "/alpha": {
                this.copyRange(data.alpha, value, false);
                break;
            }
            case "/scale": {
                this.copyRange(data.scale, value, false);
                break;
            }
            case "/drift.point": {
                data.driftPoint.x = +value.x;
                data.driftPoint.y = +value.y;
                break;
            }
            case "/drift.delay": {
                data.driftDelayy = +value;
                break;
            }
        }
        this.createEmitter();
        return qtk_1.ValidationResult.validResult;
    };
    ProtonDocument.prototype.draw = function (ctx, rect) {
        var canvas = this.canvas;
        var emitter = this.emitter;
        if (canvas) {
            var w = rect.w >> 0;
            var h = rect.h >> 0;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
                emitter.p.x = w >> 1;
                emitter.p.y = h >> 1;
            }
            ctx.drawImage(canvas, 0, 0);
        }
        console.log("ProtonDocument");
    };
    ProtonDocument.prototype.toJson = function () {
        return null;
    };
    ProtonDocument.prototype.fromJson = function (json) {
        return false;
    };
    ProtonDocument.prototype.prepareDefaultData = function () {
        var data = {
            radius: { first: 1, second: 12 },
            life: { first: 2, second: 4 },
            scale: { first: 1, second: 0.7 },
            alpha: { first: 1, second: 0 },
            driftPoint: { x: 30, y: 30 },
            driftDelay: 0.05
        };
        this.data = data;
    };
    ProtonDocument.prototype.createEmitter = function () {
        var data = this.data;
        var proton = ProtonDocument.proton;
        var life = new Proton.Life(data.life.first, data.life.second);
        var radius = new Proton.Radius(data.radius.first, data.radius.second);
        var alpha = new Proton.Alpha(data.alpha.first, data.alpha.second);
        var scale = new Proton.Scale(data.scale.first, data.scale.second);
        var velocity = new Proton.Velocity(3, Proton.getSpan(0, 360), 'polar');
        var rate = new Proton.Rate(new Proton.Span(10, 20), new Proton.Span(.1, .25));
        var mass = new Proton.Mass(1);
        var velocity = new Proton.Velocity(new Proton.Span(2, 4), new Proton.Span(-30, 30), 'polar');
        var randomDrift = new Proton.RandomDrift(data.driftPoint.x, data.driftPoint.y, data.driftDelay);
        var color = new Proton.Color('ff0000', 'random', Infinity, Proton.easeOutQuart);
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.width = 400;
            this.canvas.height = 400;
            var renderer = new Proton.Renderer('canvas', proton, this.canvas);
            renderer.start();
        }
        var canvas = this.canvas;
        if (this.emitter) {
            proton.removeEmitter(this.emitter);
        }
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
        emitter.p.x = canvas.width / 2;
        emitter.p.y = canvas.height / 2;
        emitter.emit();
        proton.addEmitter(emitter);
        this.emitter = emitter;
    };
    ProtonDocument.update = function () {
        ProtonDocument.proton.update();
        requestAnimationFrame(ProtonDocument.update);
    };
    ProtonDocument.create = function () {
        if (!ProtonDocument.proton) {
            ProtonDocument.proton = new Proton();
            requestAnimationFrame(ProtonDocument.update);
        }
        return new ProtonDocument();
    };
    ProtonDocument.proton = null;
    return ProtonDocument;
}());
exports.ProtonDocument = ProtonDocument;
;
