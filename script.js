var  op1,op2,ans,operator1;
function clear1()
{
    console.log("sunil");
    var answer=document.querySelector('.answer');
    var value=answer.innerHTML;
    value=value.slice(0,value.length-1);
    answer.innerHTML=value;
   
    return 0;
}

function addtext(number)
{
    
    
    
        var answer=document.querySelector('.answer');
        answer.innerHTML=answer.innerHTML+number;
    
   
    return 0;
}
function operation(operator)
{
    var answer=document.querySelector('.answer');
    op1=answer.innerHTML;
    operator1=operator;
    answer.innerHTML='';
    return 0;
}
function calculate()
{
    // console.log("equal");
    var answer=document.querySelector('.answer');
    op2=answer.innerHTML;
    // operator1=operator;
    ans=eval(op1+" "+operator1+" "+op2);
    answer.innerHTML=ans;
    op1="";
    op2="";
    return 0;
}
function changesign()
{
    var answer=document.querySelector('.answer');
    var op3=answer.innerHTML;
    // operator1=operator;
    ans=eval(op3+" "+"*"+" "+"-1");
    answer.innerHTML=ans;
    return 0;
}



