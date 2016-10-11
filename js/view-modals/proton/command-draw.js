"use strict";
var CommandDraw = (function () {
    function CommandDraw(protonData) {
        this._protonData = protonData;
    }
    CommandDraw.prototype.canExecute = function () {
        return true;
    };
    CommandDraw.prototype.execute = function (args) {
        var ctx = args.ctx;
        var rect = args.rect;
        var canvas = this._protonData.canvas;
        var emitter = this._protonData.protonEmitter;
        if (canvas) {
            var w = rect.w >> 0;
            var h = rect.h >> 0;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
            }
            ctx.drawImage(canvas, 0, 0);
        }
        return true;
    };
    CommandDraw.create = function (protonData) {
        return new CommandDraw(protonData);
    };
    return CommandDraw;
}());
exports.CommandDraw = CommandDraw;
;
