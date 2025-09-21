import { ErrorCodes } from "../constants/ErrorCodesEnum";


export class ValidationError extends Error{
    public readonly code: string;
    public readonly field: string;

    constructor(field: string, message: string, code: string = ErrorCodes.INVALID_DATA){
        super(message);
        this.code = code;
        this.field = field;
        this.name = ErrorCodes.VALIDATION_ERROR;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }

    toJson(){
        return {
            error: this.name,
            field: this.field,
            code: this.code,
            message: this.message
        }
    }
}