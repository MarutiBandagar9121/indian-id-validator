import { DocCheckTypes } from '../constants/DocCheckTypes';
import { ResponseMessage } from '../models/ResponseMessage';
import {verhoeffValidation} from '../utils/verhoeffAlgorithm';

export function ValidateAadhar(addhar_no: string | number): ResponseMessage {
    addhar_no = addhar_no.toString();
    //gets rid of all white space characters
    addhar_no = addhar_no.replace(/\s+/g, '');

    //checks for length validation
    if (addhar_no.length != 12) {
        return new ResponseMessage(false, addhar_no, "Aadhaar number should be 12 digit in length", DocCheckTypes.AADHAR);
    }

    //checks for any invalid characters
    if(addhar_no.match(/\D/)){
        return new ResponseMessage(false, addhar_no, "Aadhaar number should only contain digits", DocCheckTypes.AADHAR);
    }

    //checks if checksum is correct
    if(verhoeffValidation(addhar_no) == false){
        return new ResponseMessage(false, addhar_no, "Aadhaar number is not valid. Checksum validation failed.", DocCheckTypes.AADHAR);
    }
    return new ResponseMessage(true, addhar_no, "Aadhaar number is valid", DocCheckTypes.AADHAR);
}