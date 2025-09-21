import { ValidateAadhar } from "./validators/AadharValidator";
import { validateIndianMobileNumber } from "./validators/IndianMobileValidator";
import { validatePanNumber } from "./validators/PanValidator";
import { validateGstNumber } from "./validators/GSTValidator";

export const AadharValidator = ValidateAadhar;
export const IndianMobileValidator = validateIndianMobileNumber;
export const PanValidator = validatePanNumber;
export const GSTValidator = validateGstNumber;