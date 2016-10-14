
import {IDocument} from "./idocument";
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

	public getTemplateList() : Array<string> {
		return Document.templateNames;
	}
	
	public static create() {
		return new Document();
	}

	public static templates = {};
	public static templateNames = [];
	public static registerTemplate(name:string, json:any) {
		Document.templates[name] = json;
		Document.templateNames.push(name);
	}
	
	public static  getTemplateList() : Array<string> {
		return Document.templateNames;
	}
}

