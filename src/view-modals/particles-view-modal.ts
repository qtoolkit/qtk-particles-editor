import {CommandOpen} from "./command-open";
import {CommandSave} from "./command-save";
import {IParticlesViewModal} from "./iparticles-view-modal";
import {PropsDesc, PagePropsDesc, Events} from "qtk";
import {ViewModal, IViewModal, ValidationResult} from "qtk"

export abstract class ParticlesViewModal extends ViewModal implements IParticlesViewModal {
	public fileName : string;

	public getDocList() : Array<string> {
		return null;
	}
	
	public getFormatList() : Array<string> {
		return ["json", "plist", "javascript"];
	}

	public saveDoc(fileName:string) {
	}
	
	public createDoc(templateName:string) {
	}
	
	public openDoc(fileName:string) {
	}
	
	public removeDoc(fileName:string) {
	}

	public newWithTemplate(name:string) {
	}

	public getPropsDesc() : Array<PagePropsDesc> {
		return null;
	}
};

