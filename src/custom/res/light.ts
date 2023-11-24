/***2019-05-02 andy 工具生成*/
export class base64_light{
	constructor(){}
	public static base64json:string="";
	public static base64img:string="data:image/jpeg;base64,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";
}