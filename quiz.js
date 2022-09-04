var buttonref=document.querySelector("#check-button");
const quizform=document.querySelector(".quiz-form");
var ouputref=document.querySelector(".output-div");
const answers=["90°","one right angle","6, 8, 10","60°","a+b+c","no","45°","45°","a+b+c","3, 4, 5"];
var clickhandler=()=>{
  let score=0;
  let index=0;
  const formresults=new FormData(quizform)
  console.log(formresults.values())
  for(let item of formresults.values())
  {
     if(answers[index]===item)
     score+=1;
     index++;
  }
  ouputref.innerText="Total Score is "+score+"/10"
  ouputref.style.color="red";
}
buttonref.addEventListener("click",clickhandler)