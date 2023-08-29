module.exports = function toReadable (number) {
 const massNumber = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
 ]
 const massTen = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
 ]


function tenty(num){
    if(num === 0){
        return `zero`;
    }
    if(num<20){
        return massNumber[num];
    }else if(Math.floor(num%10) === 0){
        return  massTen[Math.floor(num/10)];
    }
    else {
        return massTen[Math.floor(num/10)] + " " + massNumber[Math.floor(num%10)];
    }

 }

 if(number.toString().length <3){
    return tenty(number);
 }else{
    if(Math.floor(number%100) === 0){
        return `${massNumber[Math.floor(number/100)]} hundred`;
    }
    return `${massNumber[Math.floor(number/100)]} hundred ${tenty(Math.floor(number%100))}`;
 }


}


 












 