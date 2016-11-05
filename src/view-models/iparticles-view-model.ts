import {IViewModel} from "qtk"
import {PropsDesc, PagePropsDesc} from "qtk";

export interface IParticlesViewModel extends IViewModel {
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
	
export class ParticlesViewModelFactory {
	public static viewModels:any = {};

	public static register(type:string, creator:Function) {
		ParticlesViewModelFactory.viewModels[type] = creator;
	}

	public static create(type:string, options?:any) : IParticlesViewModel {
		var creator = ParticlesViewModelFactory.viewModels[type];

		return creator(options);
	}
}
