
console.log("this is a faulty calculator");
function calculator(a,b,operator){
    let random=Math.random();
    if(random<=0.1){
        console.log("incorrect calc");
        if(operator=="+"){
            console.log (a-b);
        }
        else if(operator=="-"){
            console.log (a+b);
        }
        else if(operator=="*"){
            console.log (a/b);
        }
        else if (operator=="/"){
            console.log (a*b);
        }else{
            console.log("enter valid operation");
        }
    }
    else{
        console.log("correct calc")
        if (operator=="+"){
            console.log (a+b);
        }
        else if(operator=="-"){
            console.log (a-b);
        }
        else if(operator=="*"){
            console.log (a*b);
        }
        else if (operator=="/"){
            console.log (a/b);
        }else{
            console.log("enter valid operation");
        }
    }

}
calculator(1,2,"+");
