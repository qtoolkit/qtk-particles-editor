import {Rect} from "qtk";

export class DrawInfo {
	public ctx:any;
	public rect:Rect;

	public init(ctx:any, rect:Rect) {
		this.ctx = ctx;
		this.rect = rect;
	}

	public static create() {
		return new DrawInfo();
	}
};

