function calculateDaysBetweenDates (date1, date2) {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);
    var days = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return days;
}

// find all images withouth alternative text
// and give them a red border
function findImagesWithoutAltText () {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if (!images[i].alt) {
            images[i].style.border = '1px solid red';
        }])
    }
}