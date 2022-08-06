var inputref=document.querySelectorAll(".side")
var checkbuttonref=document.querySelector("#check-button");
var outputref=document.querySelector(".output-div");
var clickhandler=()=>{
  let a=Number(inputref[0].value);
  let b=Number(inputref[1].value);
  let ans=Math.sqrt((a*a)+(b*b));
  outputref.innerText="Hypotenuse of Triangle is "+ans+"!!";
}
checkbuttonref.addEventListener("click",clickhandler)