var inputref=document.querySelectorAll(".side")
var checkbuttonref=document.querySelector("#check-button");
var outputref=document.querySelector(".output-div");
var clickhandler=()=>{
  let a=Number(inputref[0].value);
  let b=Number(inputref[1].value);
  let ans=(0.5*a*b)
  outputref.innerText="Area of Triangle is "+ans+"!!";
}
checkbuttonref.addEventListener("click",clickhandler)