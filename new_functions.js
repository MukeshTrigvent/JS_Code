function convertOneToNineteenNumberToWord(quotient){
    // Parrallel Relation build up for index equal to number word.
    var oneToNineteenWordArray = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine",
            "Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
    var twentyToNinetyWordArray = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]
    var message = "";
    if(quotient != 0){
        // quotient can be between 1 to 99
        // 1 to 19 wording is unique
        // 20 to 99 wording has two part
        // First digit say about Twenty, Thirty and so on.
        // Second Digit say One, two , Three and so on.
        if(quotient<20){
            message += " " + oneToNineteenWordArray[quotient];
        }else{
            var first = Math.floor(quotient  / 10);
            var second = quotient % 10;
            message += " " + twentyToNinetyWordArray[first];
            if(second!=0){
                message += " " + oneToNineteenWordArray[second];
            }
        }     
    }
    return message;
}
function convertNumberToWords(num) {
    var allValid = true;
    // There is readymade function isNaN() which tell us either variable contain NaN or not.
    if (isNaN(num)) {
        allValid = false;
    }
    var message = "";
    if (allValid) {
        let temp = num;
        if(temp==0){
            message = " Zero";
        }else{
            // Check it is in Crore or not
            var quotient = Math.floor(temp / 10000000);
            if(quotient != 0){
                message += convertOneToNineteenNumberToWord(quotient) + " Crore ";
            }
            // Check it is in Lakh or not
            temp = temp % 10000000;
            quotient = Math.floor(temp / 100000);
            if(quotient != 0){                
                message += convertOneToNineteenNumberToWord(quotient) + " Lakh ";
            }
            // Check it is in Thousand or not
            temp = temp % 100000;
            quotient = Math.floor(temp / 1000);
            if(quotient != 0){                
                message += convertOneToNineteenNumberToWord(quotient) + " Thousand";
            }
            // Check it is in Lakh or not
            temp = temp % 1000;
            quotient = Math.floor(temp / 100);
            if(quotient != 0){
                message += convertOneToNineteenNumberToWord(quotient) + " Hundred";
            }
            quotient = temp % 100;
            if(quotient!=0){
                message += convertOneToNineteenNumberToWord(quotient);
            }
        }
        
        message += ".";
    } else {
        message = "Please Enter Valid Number";
    }
    return message;
}