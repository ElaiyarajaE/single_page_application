/*******************************
* ACCORDION WITH TOGGLE ICONS
*******************************/
function timesetter() {
var isoDate = new Date(new Date().getTime()).toLocaleTimeString();
$('#utc').text(isoDate);
}
$(document).ready(function() {
timesetter();
setInterval('timesetter()',1000);
});

function datesetter() {
var isoDate = new Date(new Date().getTime()).toDateString();
$('#dte').text(isoDate);
}
$(document).ready(function() {
datesetter();
setInterval('datesetter()',1000);
});

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

