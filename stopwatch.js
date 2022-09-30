var second=document.getElementById("seconds")
var minutes=document.getElementById("minutes")
var totalTime=0;
var start=document.getElementById("start")
var istimeron=false;
var timerid;
start.addEventListener ("click",function(event){
    if(istimeron)
    {
        //stop watch
        clearInterval(timerid)
        start.innerHTML="start"
        istimeron=false; 
    }
    else{
        //start watch
        timerid=setInterval(function() {
   
            totalTime++;
            minutes.innerHTML=parseInt(totalTime/60)
            second.innerHTML=parseInt(totalTime%60)
       }, 1000);
       start.innerHTML="stop "
       istimeron=true;
    }
    
})
