var inputref=document.querySelectorAll(".side")
var checkbuttonref=document.querySelector("#check-button");
var outputref=document.querySelector(".output-div");
var clickhandler=()=>{
  let sum=0;
  let isempty=false;
  let isnegangle=false;
  for(let i=0;i<3;i++)
  {
    let num=Number(inputref[i].value);
    if(num<=0)
    isnegangle=true;
    sum+=num;
    if(inputref[i].value==='')
    isempty=true;
  }
  if(isempty)
  {
    outputref.style.color="red";
    outputref.innerText="Please enter all the angles to check!!";
  }
  else if(isnegangle)
  {
    outputref.style.color="red";
    outputref.innerText="Please enter the valid angles to check!!";
  }
  else if(sum===180)
  {
    outputref.style.color="#059669";
    outputref.innerText="Yeah the Entered angles form a triangle!!";
  }
  else
  {
    outputref.style.color="red";
    outputref.innerText="No The Entered angles do not form a triangle!!";
  }
}
checkbuttonref.addEventListener("click",clickhandler)