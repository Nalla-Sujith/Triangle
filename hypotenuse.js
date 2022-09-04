var inputref=document.querySelectorAll(".side")
var checkbuttonref=document.querySelector("#check-button");
var outputref=document.querySelector(".output-div");
var clickhandler=()=>{
  let a=Number(inputref[0].value);
  let b=Number(inputref[1].value);
  if(inputref[0].value===''|| inputref[1].value==='')
  {
    outputref.innerText="Please Enter all fields!!";
    outputref.style.color='red';
  }
  else if(a<=0 || b<=0)
  {
    outputref.innerText="Please Enter Valid values!!";
    outputref.style.color='red';
  }
  else
  {
    let ans=Math.sqrt((a*a)+(b*b));
    outputref.innerText="Hypotenuse of Triangle is "+ans+"!!";
    outputref.style.color='black';
  }
}
checkbuttonref.addEventListener("click",clickhandler)