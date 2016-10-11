import {CommandOpen} from "./command-open";
import {CommandSave} from "./command-save";
import {IParticlesViewModal} from "./iparticles-view-modal";
import {PropsDesc, PagePropsDesc, Events} from "qtk";
import {ViewModal, IViewModal, ValidationResult} from "qtk"

export abstract class ParticlesViewModal extends ViewModal implements IParticlesViewModal {
	getPropsDesc() : Array<PagePropsDesc> {
		return null;
	}
};

