/**
 * 矩形
 */
export declare class Rect {
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(x: number, y: number, w: number, h: number);
    /**
     * 判断点是否在矩形内。
     * @param x X坐标。
     * @param y Y坐标。
     * @returns 如果点在矩形内返回true，否则返回false。
     */
    isPointIn(x: number, y: number): boolean;
    /**
     * 计算矩形的面积。
     */
    area(): number;
}
