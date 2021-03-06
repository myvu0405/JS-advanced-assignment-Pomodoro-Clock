let startBtt=document.getElementById('startBtt');
let resetBtt=document.getElementById('resetBtt');
let pauseBtt=document.getElementById('pauseBtt');

let workAddBtt=document.getElementById('wIncBtt');
let workMinusBtt=document.getElementById('wDecBtt');
let breakAddBtt=document.getElementById('bIncBtt');
let breakMinusBtt=document.getElementById('bDecBtt');

workAddBtt.addEventListener('click', addMinuteWork);
workMinusBtt.addEventListener('click', minusMinuteWork);

breakAddBtt.addEventListener('click',addMinuteBreak);
breakMinusBtt.addEventListener('click',minusMinuteBreak);

let myInterval;
let circles =parseInt(document.getElementById('counter').innerText);

startBtt.addEventListener('click', workCountdown);


resetBtt.addEventListener('click', reset);
pauseBtt.addEventListener('click', stopTimer);

function addMinuteWork(){
    if (myInterval){
        console.log(myInterval=='');
        console.log(myInterval);
        reset();
    }
    let currentMin=parseInt(document.getElementById('wMinute').innerHTML);
    
    currentMin++;
    
    document.getElementById('wMinute').innerHTML=currentMin;

}
function minusMinuteWork(){
    if (myInterval){
        
        reset();
    }
    let currentMin=parseInt(document.getElementById('wMinute').innerText);
    currentMin--;
    if (currentMin >=5) {
        document.getElementById('wMinute').innerHTML=currentMin;
    }

}

function addMinuteBreak(){
    if (myInterval){
        
        reset();
    }
    let currentMin=parseInt(document.getElementById('bMinute').innerHTML);
    
    currentMin++;
    
    document.getElementById('bMinute').innerHTML=currentMin;

}

function minusMinuteBreak(){
    if (myInterval){
        
        reset();
    }
    let currentMin=parseInt(document.getElementById('bMinute').innerText);
    currentMin--;
    if (currentMin >=1) {
        document.getElementById('bMinute').innerHTML=currentMin;
    }

}

function stopTimer() {
    clearInterval(myInterval);
    myInterval=undefined;
}

function breakCountdown(){
    //const breakInterval=setInterval(bTimer,1000);
    myInterval= setInterval(bTimer,1000);//new update
    let currentBreakMin=parseInt(document.getElementById('bMinute').innerText);
    let currentBreakSec=parseInt(document.getElementById('bSecond').innerText);

    function bTimer(){
        if(currentBreakMin==0 & currentBreakSec==0) {
            stopTimer();
            resetTimerValues();
            workCountdown();
        }
        else if (currentBreakSec>0){
            currentBreakSec--;
            document.getElementById('bSecond').innerHTML=currentBreakSec;

        }
        else if(currentBreakSec==0 && currentBreakMin>0){
            currentBreakMin--;
            currentBreakSec=59;
            document.getElementById('bMinute').innerHTML=currentBreakMin;
            document.getElementById('bSecond').innerHTML=currentBreakSec;
        }
    }
}

function workCountdown(){
    
    let currentMin=parseInt(document.getElementById('wMinute').innerText);
    //console.log(typeof(currentMin));
    let currentSec=parseInt(document.getElementById('wSecond').innerText);
    
    // const workInterval = setInterval(myTimer, 1000);
    myInterval=setInterval(myTimer, 1000);

 
    function myTimer(){
        if(currentMin==0 & currentSec==0) {
            circles++;//Increase work circle by 1
            document.getElementById('counter').innerText=circles;
            stopTimer();
            breakCountdown();
        }
        else if (currentSec>0){
            currentSec--;
            document.getElementById('wSecond').innerHTML=currentSec;

        }
        else if(currentSec==0 && currentMin>0){
            currentMin--;
            currentSec=59;
            document.getElementById('wMinute').innerHTML=currentMin;
            document.getElementById('wSecond').innerHTML=currentSec;
        }
    }

}

function reset(){
    stopTimer();
    resetTimerValues();
    document.getElementById('counter').innerHTML="0";
}

function resetTimerValues(){
    document.getElementById('wMinute').innerHTML="25";
    document.getElementById('wSecond').innerHTML="00";
    document.getElementById('bMinute').innerHTML="5";
    document.getElementById('bSecond').innerHTML="00"
}