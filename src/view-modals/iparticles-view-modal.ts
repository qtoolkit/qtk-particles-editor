import {IViewModal} from "qtk"
import {PropsDesc, PagePropsDesc} from "qtk";

export interface IParticlesViewModal extends IViewModal {
	getPropsDesc() : Array<PagePropsDesc>;
	getDocList() : Array<string>;
	getFormatList() : Array<string>;

	getDocName() : string;
	openDoc(fileName:string);
	saveDoc(fileName:string);
	createDoc(templateName:string);
	removeDoc(fileName:string);
	exportDoc(format:string) : string;
	
	getPropTitleWidth() : string;

	saveTemp();
	loadTemp();
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
