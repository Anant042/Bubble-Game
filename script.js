var timer=60;
 var score=0;
 var hit=0;
 
function scorectn(){ 
    score+=10;
    document.querySelector("#scorectn").textContent=score;
}
function hitval(){
         hit=Math.floor(Math.random()*10);
        document.querySelector("#hitval").textContent=hit;
}
 function timeinterval(){
   let stop= setInterval(function(){
          if(timer>0){
            timer--;
          }
          else{
            document.querySelector("#btmpanel").innerHTML=`<h1>Game Over
            <br> 
            Score :    ${score}
          
            </h1>`
           
          }
        document.getElementById("timer").textContent=timer;
     },1000)
 }
 
function getbubble(){
      var bubble=""
for(let i=1;i<177;i++){
    var val=Math.floor(Math.random()*10);
   bubble+=`<div id="bubble">${val}</div>`
}
 document.querySelector("#btmpanel").innerHTML=bubble;
}
// getbubble();


document.querySelector("#btmpanel")
.addEventListener("click",function(dets){
    // var clicked=Number(dets.target.textContent);
    var clicked=Number(dets.target.textContent);
    if(clicked===hit)
    scorectn();
    getbubble();
    hitval();
    
    // console.log(clicked);
});

getbubble();
timeinterval();
hitval();


