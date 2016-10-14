export class ContentInfo {
	public helpURL:string;

	constructor(helpURL:string) {
		this.helpURL = helpURL;
	}

	public static create(helpURL:string) : ContentInfo {
		return new ContentInfo(helpURL);
	}
}
