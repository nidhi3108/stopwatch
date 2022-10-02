var hourNode=document.getElementById("hour")
var secondNode=document.getElementById("seconds")
var minutesNode=document.getElementById("minutes")
var startNode=document.getElementById("start")
var lapNode=document.getElementById("lap")
var lapContainerNode=document.getElementsByClassName("lapContainer")
// var hrlineNode=document.getElementById("hrline")
// var lapBox1TextNode=document.getElementById("lapbox1")
// var lapTime1TextNode=document.getElementById("laptime1")



//global variable
var laps=[]
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
lapNode.addEventListener("click",showLapTime)


function showLapTime(event){

    var eventValue=event.target.innerText;
    console.log(eventValue);
    var eventcollection=event.target.parentNode.parentNode.children[3]
    console.log(eventcollection);
    var hourValue=hourNode.innerHTML
    console.log(hourValue);
    var minuteValue=minutesNode.innerHTML
    console.log(minuteValue);
    var secondValue=secondNode.innerHTML;
    console.log(secondValue);
    var currentTime=hourValue+':'+minuteValue+':'+secondValue;
    console.log(currentTime);
    
    var hrline=document.createElement("div")
    hrline.setAttribute("id","hrline")
    lapContainerNode[0].appendChild(hrline)
    var horinzontalLine=document.createElement("hr")
    hrline.appendChild(horinzontalLine)



    var lapboxlaptime=document.createElement("div")
    lapboxlaptime.setAttribute("class","lapboxlaptime")
    lapContainerNode[0].appendChild(lapboxlaptime)


    var lapbox1=document.createElement("div")
    lapbox1.setAttribute("id","lapbox1")
    lapboxlaptime.appendChild(lapbox1)
    var createLapText=document.createElement("p")
    lapbox1.appendChild(createLapText)
    createLapText.innerHTML="Lap1"

    var laptime1=document.createElement("div")
    laptime1.setAttribute("id","laptime1")
    lapboxlaptime.appendChild(laptime1)
    var createTimeText=document.createElement("p")
    laptime1.appendChild(createTimeText)
    createTimeText.innerHTML=`${currentTime}`

      laps.push(createLapText,createTimeText,horinzontalLine)
      console.log(laps);
    console.log(lapContainerNode);
    resetAllLaps(eventValue,lapboxlaptime,hrline,eventcollection,hourValue,minuteValue,secondValue);
    
}

function resetAllLaps(eventValue,eventcollection,secondValue,hourValue,minuteValue){
        //  var lapNodeText=event.target;
         console.log(eventValue);

         if(eventValue==="Reset")
         {
             secondValue.innerHTML="00"
             hourValue.innerHTML="00"
             minuteValue.innerHTML="00"
            eventcollection.remove()
         }
}


