// Theme Switcher
$('button').click(function() {
    var thisButton = $(this);
    if ($('body').hasClass('day_theme')) {
        $('body').removeClass('day_theme');
        $('body').addClass('night_theme');
    } else {
        $('body').removeClass('night_theme');
        $('body').addClass('day_theme');
    }
})

// Run the clock
function clock() {
    //Get the current Date
    var $currentTime = new Date();


    // extract hours, display correctly
    var hours = $currentTime.getHours();
    console.log(hours);
    if (hours > 12) {
        hours -= 12;
    }

    // extract minutes, display correctly
    var minutes = $currentTime.getMinutes();
    console.log(minutes);
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    // extract seconds, display correctly 
    var seconds = $currentTime.getSeconds();
    console.log(seconds);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    // Display Time
    $('#hours h1').text(hours);
    $('#minutes h1').text(minutes);
    $('#seconds h1').text(seconds);

}

// update the time every second

$(document).ready(function() {
    clock();
    setInterval('clock()', 1000);
})


//refactor