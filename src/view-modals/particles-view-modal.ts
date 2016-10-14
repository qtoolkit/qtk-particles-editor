import {CommandOpen} from "./command-open";
import {CommandSave} from "./command-save";
import {IParticlesViewModal} from "./iparticles-view-modal";
import {PropsDesc, PagePropsDesc, Events} from "qtk";
import {ViewModal, IViewModal, ValidationResult} from "qtk"

export abstract class ParticlesViewModal extends ViewModal implements IParticlesViewModal {
	public getPropsDesc() : Array<PagePropsDesc> {
		return null;
	}

	public getDocList() : Array<string> {
		return null;
	}

	public getFormatList() : Array<string> {
		return null;
	}

	public getDocName() : string {
		return null;
	}

	public openDoc(fileName:string) {
	}
	
	public saveDoc(fileName:string) {
	}
	
	public createDoc(templateName:string){
	}

	public removeDoc(fileName:string) {
	}

	public exportDoc(format:string) : string {
		return null;
	}
};

