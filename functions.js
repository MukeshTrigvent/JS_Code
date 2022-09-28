function convertOneToNineteenNumberToWord(quotient){
    var message = "";
    if(quotient != 0){
        // quotient can be between 1 to 99
        // 1 to 19 wording is unique
        // 20 to 99 wording has two part
        // First digit say about Twenty, Thirty and so on.
        // Second Digit say One, two , Three and so on.
        if(quotient<20){
            if(quotient == 1){
                message += " One";
            }else if(quotient == 2){
                message += " Two";
            }else if(quotient == 3){
                message += " Three";
            }else if(quotient == 4){
                message += " Four";
            }else if(quotient == 5){
                message += " Five";
            }else if(quotient == 6){
                message += " Six";
            }else if(quotient == 7){
                message += " Seven";
            }else if(quotient == 8){
                message += " Eight";
            }else if(quotient == 9){
                message += " Nine";
            }else if(quotient == 10){
                message += " Ten";
            }else if(quotient == 11){
                message += " Eleven";
            }else if(quotient == 12){
                message += " Twelve";
            }else if(quotient == 13){
                message += " Thirteen";
            }else if(quotient == 14){
                message += " Fourteen";
            }else if(quotient == 15){
                message += " Fifteen";
            }else if(quotient == 16){
                message += " Sixteen";
            }else if(quotient == 17){
                message += " Seventeen";
            }else if(quotient == 18){
                message += " Eighteen";
            }else if(quotient == 19){
                message += " Nineteen";
            }
        }else{
            var first = Math.floor(quotient  / 10);
            var second = quotient % 10;
            if(first == 2){
                message += " Twenty";
            }else if(first == 3){
                message += " Thirty";
            }else if(first == 4){
                message += " Forty";
            }else if(first == 5){
                message += " Fifty";
            }else if(first == 6){
                message += " Sixty";
            }else if(first == 7){
                message += " Seventy";
            }else if(first == 8){
                message += " Eighty";
            }else if(first == 9){
                message += " Ninety";
            }
            if(second!=0){
                if(second == 1){
                    message += " One";
                }else if(second == 2){
                    message += " Two";
                }else if(second == 3){
                    message += " Three";
                }else if(second == 4){
                    message += " Four";
                }else if(second == 5){
                    message += " Five";
                }else if(second == 6){
                    message += " Six";
                }else if(second == 7){
                    message += " Seven";
                }else if(second == 8){
                    message += " Eight";
                }else if(second == 9){
                    message += " Nine";
                }   
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