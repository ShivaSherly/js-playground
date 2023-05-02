const errorMessage=require('./utils/errorMessage');
// Need a calculator with add / sub / mul / div

const mathematicalOperation = (myinputlist,operationType)=>{
    if(operationType=="add"){
        let total=0;
        myinputlist.map((x)=>{
            total=total+x;
        })
        return total;
    }else if(operationType=="mul"){
        let total=1;
        myinputlist.map((x)=>{
            total=total*x;
        })
        return total;
    }else{
        return errorMessage.displayError("invalid input");
    }
}

console.log(mathematicalOperation([5,6,64,434,645,3434,6453,343,6343,43453,43436,3534,34],"add"));
console.log(mathematicalOperation([5,6,5,34,534,434,53,434,35,43],"mul"));