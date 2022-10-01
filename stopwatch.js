var secondNode=document.getElementById("seconds")
var minutesNode=document.getElementById("minutes")
var startNode=document.getElementById("start")
var lapNode=document.getElementById("lap")
var lapContainerNode=document.getElementsByClassName("lapContainer")
var lapBox1TextNode=document.getElementById("lapbox1")
var lapTime1TextNode=document.getElementById("laptime1")
var horinzontalLine=document.createElement("hr")
var createLapText=document.createElement("h4")
var createTimeText=document.createElement("h2")


//global variable
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
        }, 60);
        startNode.innerHTML="stop "
        //    start.style.backgroundColor="green";
        istimeron=true;
    }
    
})

//after clicking lap  save the current time below lap button
lapNode.addEventListener("click",showLapTime)

function showLapTime(event){
    // var currentTimeValueNode=document.getElementsByTagName("label")
    // console.log(currentTimeValueNode);
    var second=secondNode.innerHTML;
    var minute=minutesNode.innerHTML;
    var hour=secondNode.innerHTML;      // hour dalo yha p
    
    console.log(event.target);

    console.log(minute +':'+ second);
}