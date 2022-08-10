
/*
* The forward slashes / / mark the beginning and end of the regular expression.
* The \S character matches a single character other than white space.
* The + character matches the preceding character one or more times.
*/
const isValidInput = (arr)=>{
    let valid = true;
    for(let index = 1; index < arr.length; index++){
        valid =  /\S+@eng.jfn.ac.lk/.test(arr[index]);
        if(valid === false)
            break;
    }
   return valid
}

export {isValidInput}
