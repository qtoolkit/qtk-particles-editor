"use strict";
/**
 * 矩形
 */
var Rect = (function () {
    function Rect(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    /**
     * 判断点是否在矩形内。
     * @param x X坐标。
     * @param y Y坐标。
     * @returns 如果点在矩形内返回true，否则返回false。
     */
    Rect.prototype.isPointIn = function (x, y) {
        return x >= this.x && x <= (this.x + this.w) && y >= this.y && this.y <= (this.y + this.h);
    };
    /**
     * 计算矩形的面积。
     */
    Rect.prototype.area = function () {
        return this.w * this.h;
    };
    return Rect;
}());
exports.Rect = Rect;
;
