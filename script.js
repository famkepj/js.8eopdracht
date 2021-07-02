/* function declaration*/

function cal1 (number1, number2){

    const result1 = number1*number1 + number2*number2;      
    return result1*result1;
}


/* function expression*/

const cal2 = function(number1, number2) {

    const result2 = number1*number1 + number2*number2;      
    return result2*result2;
};


/* arrow function */

const cal3 = (number1, number2) =>{

    const result2 = number1*number1 + number2*number2;      
    return result2*result2;
};


/*functies aanroepen*/

console.log(cal1(10,5));
console.log(cal2(10,5));
console.log(cal3(10,5));
