export class AboutInfo {
	public author:string;
	public email:string;
	public home:string;
	public engine:string;

	constructor(author:string, email:string, home:string, engine:string) {
		this.author = author;
		this.email = email;
		this.home = home;
		this.engine = engine;
	}

	public static create(author:string, email:string, home:string, engine:string) : AboutInfo {
		return new AboutInfo(author, email, home, engine);
	}
}
