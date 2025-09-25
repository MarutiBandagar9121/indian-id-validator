import { DocCheckTypes } from "../constants/DocCheckTypes";
import { ResponseMessage } from "../models/ResponseMessage";

export function validatePanNumber(pan_no: string): ResponseMessage{
    const pan_regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/ ;
    pan_no = pan_no.trim();
    pan_no = pan_no.toUpperCase();
    if(pan_no.length != 10){
        return new ResponseMessage(false, pan_no, "PAN number should be 10 digit in length", DocCheckTypes.PAN);
    }
    if(!pan_regex.test(pan_no)){
        return new ResponseMessage(false, pan_no, "PAN number is not valid", DocCheckTypes.PAN);
    }
    return new ResponseMessage(true, pan_no, "PAN number is valid", DocCheckTypes.PAN); 
}