const reverting = (input) =>{

    if(input.length == 1)
    {
        return input
    }
    else
    {
        return   reverting(input.substr(input.length-1,1)) + reverting(input.substr(0,input.length-1)) ;
    }
}

console.log(reverting('Hello world'));