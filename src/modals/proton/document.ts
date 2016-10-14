
import {IDocument} from "../idocument";
import {PropsDesc, PagePropsDesc, Events} from "qtk";

export class Document implements IDocument {
	public data:any;
	public propsDesc : Array<PagePropsDesc>;

	public toJson() : any {
		var json = {
			data:this.data,
			propsDesc: this.propsDesc.map((item:PagePropsDesc) => {
				return item.toJson();
			})
		};
		
		return json;
	}

	public fromJson(json:any) : Document {
		this.data = json.data;
		this.propsDesc = json.propsDesc.map(item => {
			return PagePropsDesc.create(item.title, item.propsDesc.items);
		});

		return this;
	}

	public fromTemplate(name:string) : Document {
		var json = Document.templates[name];
		var data = {};
		this.propsDesc = json.map(item => {
			var pagePropsDesc = PagePropsDesc.create(item.title, item.propsDesc);
			
			item.propsDesc.forEach(desc => {
				if(desc.path) {
					data[desc.path] = desc.value;
				}
			});

			return pagePropsDesc;
		});

		this.data = data;

		return this;
	}

	public static createFromJson(json:any) {
		var doc = new Document();
		if(json){
			doc.fromJson(json);
		}
		return doc;
	}

	public static templates = {};
	public static templateNames = [];
	public static registerTemplate(name:string, json:any) {
		Document.templates[name] = json;
		Document.templateNames.push(name);
	}
	
	public static createFromTemplate(name:string) {
		var doc = new Document();
		if(name) {
			doc.fromTemplate(name);
		}

		return doc;
	}
}

const defaultTemplate = [
	{
		title : "Initialize",
		propsDesc : [
			{type:"range", name:"Radius", converter:"radius", path:"radius", value:{first:1, second:12}},
			{type:"range", name:"Life", converter:"life", path:"life", value:{first:2, second:4}},
			{type:"range", name:"Mass", converter:"mass", path:"mass", value:{first:1, second:1}},
			{type:"vector2", name:"Position", path:"position", converter:"point", value:{x:300, y:300}},
			{type:"line", name:"Rate"},
			{type:"range", name:"number", converter:"number", path:"rateNum", value:{first:10, second:20}},
			{type:"range", name:"time", converter:"time", path:"rateTime", value:{first:.1, second:.25}},
			{type:"line"},
			{type:"options", name:"Type", converter:"velocity", path:"vType", value:"polar",
				options:["polar", "linear"]},
			{type:"range", name:"rpan", converter:"velocity", path:"vRpan", value:{first:2, second:4}},
			{type:"range", name:"thapan", converter:"velocity", path:"vThapan", value:{first:-30, second:30}},
			{type:"line"}
		]
	},
	{
		title : "Behaviour",
		propsDesc : [
			{type:"range", name:"Scale", path:"scale", converter:"scale", value:{first:1, second:0.7}},
			{type:"range", name:"Alpha", path:"alpha", converter:"alpha", value:{first:1, second:0}},
			{type:"line", name:"Drift"},
			{type:"vector2", name:"Point", path:"driftPoint", converter:"point", value:{x:30, y:30}},
			{type:"number", name:"Delay", path:"driftDelay", converter:"delay", value:0.05},
			{type:"line"}
		]
	}
];

Document.registerTemplate("default", defaultTemplate);

