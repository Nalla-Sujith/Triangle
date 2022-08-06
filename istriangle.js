var inputref=document.querySelectorAll(".side")
var checkbuttonref=document.querySelector("#check-button");
var outputref=document.querySelector(".output-div");
var clickhandler=()=>{
  let sum=0;
  for(let i=0;i<3;i++)
  {
    sum+=Number(inputref[i].value);
  }
  console.log(sum);
  if(sum===180)
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