window.onload = function(){
    var secs = 00;
    var long = 00;
    var pops = document.getElementById("sec");
    var pulls = document.getElementById("long");
    var start_on = document.getElementById("start-on");
    var stop_off = document.getElementById("stop-off");
    var reset = document.getElementById("reset");
    var gap;

    start_on.addEventListener('click', () => {
        clearInterval(gap);
        gap = setInterval(time_on, 10);  
    });

    stop_off.addEventListener('click', () => {
        clearInterval(gap);
    });

    reset.addEventListener('click', () => {
        clearInterval(gap);
        long = "00";
        secs = "00";
        pops.innerHTML = secs;
        pulls.innerHTML = long;
    });

    function time_on(){
        long++;
        if(long <= 9){
            pulls.innerHTML = "0" + long;
        }

        if(long > 9){
            pulls.innerHTML = long;
        }

        if(long > 99){
            secs++;
            pops.innerHTML = "0" + secs;
            long = 0;
            pulls.innerHTML = "0" + 0;
        }

        if(secs > 9){
            pops.innerHTML = secs;
        }
    }
}
