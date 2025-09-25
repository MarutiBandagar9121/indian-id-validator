export class ResponseMessage{
    result:boolean;
    input:string;
    message:string;
    type:string;

    constructor(result:boolean, input:string, message:string, type:string){
        this.result = result;
        this.input = input;
        this.message = message;
        this.type = type;
    }
}