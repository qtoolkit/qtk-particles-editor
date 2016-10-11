
import {PropsDesc, PagePropsDesc, Events} from "qtk";

export class Template {
	public data:any;
	public propsDesc : Array<PagePropsDesc>;

	public parse(json:Array<any>) {
		var data = {};
		var propsDesc = [];

		json.forEach(item => {
			var pagePropsDesc = PagePropsDesc.create(item.title, item.propsDesc);
			item.propsDesc.forEach(desc => {
				data[desc.path] = desc.value;
			});
			propsDesc.push(pagePropsDesc);
		});

		this.data = data;
		this.propsDesc = propsDesc;
	}

	public static templates = {};
	public static register(name:string, json:any) {
		Template.templates[name] = json;
	}

	public static create(name:string) {
		var json = Template.templates[name];

		var template = new Template();
		template.parse(json);

		return template;
	}
}

const defaultTemplateJson = [
	{
		title : "Initialize",
		propsDesc : [
			{type:"range", name:"Radius", converter:"radius", path:"radius", value:{first:1, second:12}},
			{type:"range", name:"Life", converter:"life", path:"life", value:{first:2, second:4}}
		]
	},
	{
		title : "Behaviour",
		propsDesc : [
			{type:"range", name:"Scale", path:"scale", value:{first:1, second:0.7}},
			{type:"range", name:"Alpha", path:"alpha", value:{first:1, second:0}},
			{type:"number", name:"Drift Delay", path:"driftDelay", value:0.05},
			{type:"vector2", name:"Drift Point", path:"driftPoint", value:{x:30, y:30}}
		]
	}
];

Template.register("default", defaultTemplateJson);

