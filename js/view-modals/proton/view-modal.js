"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var proton = require("proton");
var template_1 = require("./template");
var converters_1 = require("./converters");
var command_draw_1 = require("./command-draw");
var command_about_1 = require("../command-about");
var command_content_1 = require("../command-content");
var particles_view_modal_1 = require("../particles-view-modal");
var iparticles_view_modal_1 = require("../iparticles-view-modal");
var ProtonViewModal = (function (_super) {
    __extends(ProtonViewModal, _super);
    function ProtonViewModal(template) {
        _super.call(this, template.data);
        this.createEmitter();
        this.template = template;
        converters_1.Converters.init(this);
        this.registerCommands();
    }
    ProtonViewModal.prototype.getPropsDesc = function () {
        return this.template.propsDesc;
    };
    ProtonViewModal.prototype.setProp = function (path, value, converter, validationRule) {
        var result = _super.prototype.setProp.call(this, path, value, converter, validationRule);
        this.createEmitter();
        return result;
    };
    ProtonViewModal.prototype.registerCommands = function () {
        this.registerCommand("draw", command_draw_1.CommandDraw.create(this));
        this.registerCommand("about", command_about_1.CommandAbout.create(this, "https://github.com/a-jie/Proton"));
        this.registerCommand("content", command_content_1.CommandContent.create(this, "http://proton.jpeer.at/index.html"));
    };
    ProtonViewModal.prototype.createEmitter = function () {
        var data = this.data;
        var proton = ProtonViewModal.proton;
        var life = new Proton.Life(data.life.first, data.life.second);
        var radius = new Proton.Radius(data.radius.first, data.radius.second);
        var alpha = new Proton.Alpha(data.alpha.first, data.alpha.second);
        var scale = new Proton.Scale(data.scale.first, data.scale.second);
        var velocity = new Proton.Velocity(3, Proton.getSpan(0, 360), 'polar');
        var rate = new Proton.Rate(new Proton.Span(data.rateNum.first, data.rateNum.second), new Proton.Span(data.rateTime.first, data.rateTime.second));
        var mass = new Proton.Mass(data.mass.first, data.mass.second);
        var velocity = new Proton.Velocity(new Proton.Span(data.vRpan.first, data.vRpan.second), new Proton.Span(data.vThapan.first, data.vThapan.second), data.vType);
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
        if (this.protonEmitter) {
            proton.removeEmitter(this.protonEmitter);
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
        emitter.p.x = data.position.x;
        emitter.p.y = data.position.y;
        emitter.emit();
        proton.addEmitter(emitter);
        this.protonEmitter = emitter;
    };
    ProtonViewModal.create = function (options) {
        if (!ProtonViewModal.proton) {
            ProtonViewModal.proton = new Proton();
            requestAnimationFrame(ProtonViewModal.update);
        }
        var name = options ? (options.template || "default") : "default";
        var template = template_1.Template.create(name);
        var viewModal = new ProtonViewModal(template);
        return viewModal;
    };
    ProtonViewModal.update = function () {
        ProtonViewModal.proton.update();
        requestAnimationFrame(ProtonViewModal.update);
    };
    ProtonViewModal.TYPE = "proton";
    ProtonViewModal.proton = null;
    return ProtonViewModal;
}(particles_view_modal_1.ParticlesViewModal));
exports.ProtonViewModal = ProtonViewModal;
;
iparticles_view_modal_1.ParticlesViewModalFactory.register(ProtonViewModal.TYPE, ProtonViewModal.create);
