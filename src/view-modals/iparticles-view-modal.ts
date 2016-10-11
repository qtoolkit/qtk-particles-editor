import {IViewModal} from "qtk"
import {PropsDesc, PagePropsDesc} from "qtk";

export interface IParticlesViewModal extends IViewModal {
	getPropsDesc() : Array<PagePropsDesc>;
};
	
export class IParticlesViewModalFactory {
	public static viewModals:any = {};

	public static register(type:string, creator:Function) {
		IParticlesViewModalFactory.viewModals[type] = creator;
	}

	public static create(type:string, options?:any) : IParticlesViewModal {
		var creator = IParticlesViewModalFactory.viewModals[type];

		return creator(options);
	}
}
