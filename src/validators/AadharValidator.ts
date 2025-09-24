export function ValidateAadhar(addhar_no: string) {
    addhar_no = addhar_no.trim();
    if (addhar_no.length != 12) {
        return {result:false, addhar_no:addhar_no};
    }
    return {result:true, addhar_no:addhar_no};
}