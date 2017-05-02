// Run the clock
// function clock() {  ****Removed function - document.ready is deprecated
//Get the current Date
var $currentTime = new Date();
// extract hours, display correctly
var hours = $currentTime.getHours();
// console.log(hours);
if (hours > 12) {
    hours -= 12;
    // Display 12 am- 12:59 am correctly
} else if (hours == 0) {
    hours += 12;
}
// extract minutes, display correctly
var minutes = $currentTime.getMinutes();
// console.log(minutes);
if (minutes < 10) {
    minutes = '0' + minutes;
}
// extract seconds, display correctly 
var seconds = $currentTime.getSeconds();
// console.log(seconds);
if (seconds < 10) {
    seconds = '0' + seconds;
}

// Display Time
$('#hours h1').text(hours);
$('#minutes h1').text(minutes);
$('#seconds h1').text(seconds);


// ******THEME******
// Automate theme based on time of day

// Strict hours because in hours above, 12am (0) gets 12 added on so 12-1 am the daytime theme showed.
// var strictHours = $currentTime.getHours();

// TODO: This statement, along with lines 11-12, makes 12-1am display the daytime theme
if (hours < 6 || hours > 19 && themeSwitcher == 'automatic') {
    $('body').removeClass('day_theme');
    $('body').addClass('night_theme');
    $("#icon").attr("src", "images/mark-as-favourite-star.png")
}

// Theme variable
var themeSwitcher = 'automatic';

// Theme Switcher
$('button').click(function() {
    themeSwitcher = 'manual';
    var thisButton = $(this);
    if ($('body').hasClass('day_theme')) {
        $('body').removeClass('day_theme');
        $('body').addClass('night_theme');
        $("#icon").attr("src", "images/mark-as-favourite-star.png");
    } else {
        $('body').removeClass('night_theme');
        $('body').addClass('day_theme');
        // It takes a little while for this icon to load
        $("#icon").attr("src", "images/shining-sun.png");
    }
})

// }

// FIXME: Removing this fixed the manual theme switcher, but broke the continuous clock
// update the time every second
// Document.ready is deprecated
// $(document).ready(function() {
//     clock();
//     setInterval('clock()', 1000);
// })

//TODO: Refactor