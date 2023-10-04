var hitrn=0;
var score=0;
var timer=1;
function makeBubble(){
    var clutter="";
    for(var i=1;i<=105;i++)
    {
        hitrn=Math.floor(Math.random()*10);
        clutter+=`<div class ="bubble">${hitrn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}

function runTime()
{
    var t=setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerval").textContent=timer;
        } else {
            clearInterval(t);
            document.querySelector("#pbtm").innerHTML= `<h1> <font color="red"> Game Over <font> </h1>`;
        }

    },1000);
}
function getNewHit()
{
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function inScore()
{
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn)
    {
        
        inScore(); 
        makeBubble();
        getNewHit();
         
    }
});
runTime();
makeBubble();
getNewHit();

