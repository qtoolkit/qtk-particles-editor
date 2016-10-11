import { IParticlesViewModal } from "./iparticles-view-modal";
import { PagePropsDesc } from "qtk";
import { ViewModal } from "qtk";
export declare abstract class ParticlesViewModal extends ViewModal implements IParticlesViewModal {
    getPropsDesc(): Array<PagePropsDesc>;
}
