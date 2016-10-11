import {IViewModal} from "qtk"
import {PropsDesc, PagePropsDesc} from "qtk";

export interface IParticlesViewModal extends IViewModal {
	getPropsDesc() : Array<PagePropsDesc>;
};
	
export class ParticlesViewModalFactory {
	public static viewModals:any = {};

	public static register(type:string, creator:Function) {
		ParticlesViewModalFactory.viewModals[type] = creator;
	}

	public static create(type:string, options?:any) : IParticlesViewModal {
		var creator = ParticlesViewModalFactory.viewModals[type];

		return creator(options);
	}
}
