var hourNode=document.getElementById("hour")
var secondNode=document.getElementById("seconds")
var minutesNode=document.getElementById("minutes")
var startNode=document.getElementById("start")
var lapNode=document.getElementById("lap")
var lapContainerNode=document.getElementsByClassName("lapContainer")
// var hrlineNode=document.getElementById("hrline")
// var lapBox1TextNode=document.getElementById("lapbox1")
// var lapTime1TextNode=document.getElementById("laptime1")
// var horinzontalLine=document.createElement("hr")
// var createLapText=document.createElement("p")
// var createTimeText=document.createElement("p")


//global variable
// var laps=[]
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
    }
    else{
        //start watch
        timerid=setInterval(function() {
            
            totalTime++;
            minutesNode.innerHTML=parseInt(totalTime/60)
            secondNode.innerHTML=parseInt(totalTime%60)
        }, 1000);
        startNode.innerHTML="stop "
        //    start.style.backgroundColor="green";
        istimeron=true;
    }
    
})

//after clicking lap  save the current time below lap button
lapNode.addEventListener("click",showLapTime)

function showLapTime(){
    // var currentTimeValueNode=document.getElementsByTagName("label")
    // console.log(currentTimeValueNode);
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
    lapContainerNode.appendChild(hrline)

























    // addAllLaps(currentTime);
}
// function addAllLaps(currentTime)
// {
//     hrlineNode.appendChild(horinzontalLine)
//     lapBox1TextNode.appendChild(createLapText)
//     createLapText.innerHTML="Lap1"
//     lapTime1TextNode.appendChild(createTimeText)
//     createTimeText.innerHTML=`${currentTime}`
// }