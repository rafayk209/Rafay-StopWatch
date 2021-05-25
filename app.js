var minn= document.getElementById('minute');
var secc= document.getElementById('second');
var msecc= document.getElementById('micro');
var dis = document.getElementById('playButton')


var min=00;
var sec=00;
var msec=00;
var interval;



function timer()
{
    msec++
    msecc.innerHTML=msec;

    if(msec==100){
        sec++
        secc.innerHTML=sec;
        msec=00;
    }
    else if(sec==60){
        min++
        minn.innerHTML=min;

        sec=00;
    }
}

function start(){
    interval= setInterval(timer,10)
    dis.disabled = true

}
function pause(){
    clearInterval(interval);
    dis.disabled = false;

}
function stop(){
    min=00;
    sec =00;
    msec=00;
    
    minn.innerHTML=min;
    secc.innerHTML=sec;
    msecc.innerHTML=msec;

    clearInterval(interval);
    dis.disabled = false


}
