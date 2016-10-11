
import {ICommand} from "qtk";
import {IProtonData} from "./iproton-data";

export class CommandDraw implements ICommand {
	protected _protonData : IProtonData;

	constructor(protonData:IProtonData) {
		this._protonData = protonData;
	}

	public canExecute() : boolean {
		return true;
	}

	public execute(args:any) : boolean {
		var ctx = args.ctx;
		var rect = args.rect;
		var canvas = this._protonData.canvas;
		var emitter = this._protonData.protonEmitter;
		
		if(canvas) {
			var w = rect.w >> 0;
			var h = rect.h >> 0;
			if(canvas.width !== w || canvas.height !== h) {
				canvas.width = w;
				canvas.height = h;
			}

			ctx.drawImage(canvas, 0, 0);
		}
		return true;
	}

	public static create(protonData:IProtonData) : ICommand {
		return new CommandDraw(protonData);
	}
};
