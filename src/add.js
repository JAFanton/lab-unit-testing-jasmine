function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    else if(numOne === " " || numTwo === " "){
        return undefined;
    }
    return numOne + numTwo;
}