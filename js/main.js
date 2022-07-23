feather.replace();

var delay = 1500;

function dot(){
    $('.dot').addClass('dot-typing');
}

function dots(){
    $('.dots').addClass('dots-typing');
}

function notif(){
    $('.notification').addClass('notify-in');
}

function text(){
    $('.text').addClass('text-act');
}

/*main animation */
function newMsg(e){
    setTimeout(function() { dot(); dots();}, delay, $(this));
    setTimeout(function() { notif(); }, delay*3.6, $(this));
    setTimeout(function() { text(); }, delay*4.6, $(this));
}
/*calling function*/
newMsg();
