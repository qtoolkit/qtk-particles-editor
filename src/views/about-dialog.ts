import {PropertyDialog, PagePropsDesc} from "qtk";
import {AboutInfo} from "../modals/about-info";

export class AboutDialog {
	public static show(aboutInfo:AboutInfo, onOK:Function) {
		var json = [
			{type:"text-readonly", name:"Author", path:"author"},
			{type:"link", name:"Email", path:"email"},
			{type:"link", name:"Home", path:"home"},
			{type:"link", name:"Engine", path:"engine"},
		];

		var propsDesc = PagePropsDesc.create("About", json);
		PropertyDialog.show(propsDesc, aboutInfo, onOK);
	}
}
