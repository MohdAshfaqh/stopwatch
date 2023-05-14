
// fetch timer from DOM
const timer = document.getElementById('timer');

// creating variables  intialise with zero
var hr = 0;
var min = 0;
var sec = 0;
var milisec = 0;


// initialise stop time as true means time is stoped already
var stoptime = true;


// fetch query from css for btn style
var start = document.querySelector('#start');
var stop_b = document.querySelector('#stop');


// start function 
function startTimer() {
    if (stoptime == true) {     // if timer is true means stop then do it start
        stoptime = false;
        timerCycle();

        //after click
        start.style.opacity = "0.6";
        stop_b.style.opacity = "1";
    }
}


//stop function
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;

        //after click
        stop_b.style.opacity = "0.6";
        start.style.opacity = "1";
    }
}

//reset function
function resetTimer() {

    timer.innerHTML = "00:00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    milisec = 0;
    min = 0;

    //after click
    start.style.opacity = "1";
    stop_b.style.opacity = "1";

}


// main function 

function timerCycle() {
    if (stoptime == false) {
        milisec = parseInt(milisec);
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        milisec = milisec + 5; // increment by 5 ms

        if (milisec == 100) {
            sec = sec + 1;
            milisec = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (milisec < 10) {  // add leading zero for millisecond value less than 10
            milisec = '0' + milisec;
            // } else if(milisec < 100){  // add leading zero for millisecond value less than 100
            //     milisec = '0' + milisec;
        }

        if (sec < 10) {
            sec = '0' + sec;          
        }
        if (min < 10) {
            min = '0' + min;
        }
        if (hr < 10) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ":" + min + ":" + sec + ":" + milisec;

        setTimeout(timerCycle, 50); // call timerCycle function every 50ms
    }
}