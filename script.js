let result=document.getElementById("result");
let button=document.querySelectorAll("button");
let screenValue="";
for(item of button){
    item.addEventListener('click',(t)=>{
       buttonText =t.target.innerText;
    if(buttonText=="C"){
        screenValue="0";
        result.value=screenValue;
    }
    else if(buttonText=="="){
      result.value=eval(screenValue);
    }
    else{
        screenValue+=buttonText;
        result.value=screenValue;
    }
    })
}
