
var hourNode=document.getElementById("hour")
var secondNode=document.getElementById("seconds")
var minutesNode=document.getElementById("minutes")
var startNode=document.getElementById("start")
var lapNode=document.getElementById("lap")
var lapContainerNode=document.getElementsByClassName("lapContainer")
var secondlapboxlapcontainerNode=document.getElementsByClassName("secondlapboxlapcontainer")



//global variable
var idx=0
var totalTime=0;
var istimeron=false;
var timerid;


//start and stop watch
startNode.addEventListener ("click",function(event){
    if(istimeron)
    {
        //stop watch
        clearInterval(timerid)
        startNode.innerHTML="start"
        istimeron=false; 
        lapNode.innerHTML="Reset"

    }
    else{
        //start watch
        timerid=setInterval(function() {
            
            totalTime++;
            minutesNode.innerHTML=parseInt(totalTime/60)
            secondNode.innerHTML=parseInt(totalTime%60)
        }, 1000);
        startNode.innerHTML="stop "
        lapNode.innerHTML="Lap"
        istimeron=true;
    }
    
})



//after clicking lap  save the current time below lap button
lapNode.addEventListener("click",lapResetBtnFunctionality)



function lapResetBtnFunctionality(e)
{
    console.log(e.target);
    if(e.target.innerText==='Lap')
    {   
        lap()

    }else if(e.target.innerText==='Reset'){
        resetTimer(e);
    }
}

function lap(){
    
        var hourValue=hourNode.innerHTML
        console.log(hourValue);
        var minuteValue=minutesNode.innerHTML
        console.log(minuteValue);
        var secondValue=secondNode.innerHTML;
        console.log(secondValue);
        var currentTime=hourValue+':'+minuteValue+':'+secondValue;
        console.log(currentTime);



        var lapboxlaptime=document.createElement("div")
            lapboxlaptime.setAttribute("class","lapboxlaptime")
            lapContainerNode[0].appendChild(lapboxlaptime)
            idx++
        
            
            var lapbox1=document.createElement("div")
            lapbox1.setAttribute("id","lapbox1")
            lapboxlaptime.appendChild(lapbox1)
            var createLapText=document.createElement("p")
            lapbox1.appendChild(createLapText)
            createLapText.innerHTML=`Lap${idx}`

            var laptime1=document.createElement("div")
           laptime1.setAttribute("id","laptime1")
           lapboxlaptime.appendChild(laptime1)
           var createTimeText=document.createElement("p")
           laptime1.appendChild(createTimeText)
           createTimeText.innerHTML=`${currentTime}`
}

function resetTimer(e)
{
    hourNode.innerHTML="00"
    minutesNode.innerHTML="00"
    secondNode.innerHTML="00"
    lapContainerNode[0].innerHTML=''
    console.log(lapContainerNode);
    idx=0
    totalTime=0
}