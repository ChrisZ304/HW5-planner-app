//page default to display current date and time
$(document).readystate(function () {
    $("currentDay").text(moment().format("DDDD MMM mo YYYY"));
function dispDateTime() {
    var currentDateTime = moment().hours();
    }

},
//click event function for save to local storage
$(".saveBtn").onclick(function(event) {
    event.preventDefault()
    var textVal = $(this).val //???
    var  timeVal = $(this).dateTime.val //???

    localStorage.setItem(textValue, timeValue);
}),

//color coding past/future/present time blocks
$(".time-block").each(function () {
    var hourEl = $(function(){}).attr("id");
    var hourDay = hourEl.substrings(hourEl.length);
    var dateHourInt = parseInt(hourDay) //converting substring to number
    var currentHourInt = parseInt(currentHours); //converting substring to number
    console.log(dispDateTime) //???

    //if time-block is prior to current date/time make class "past"
    if (parseInt(dateHourInt) < parseInt(currentHourInt)) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    } //if time-block is after current date/time make class "future"
    else if (parseInt(dateHourInt) > parseInt(currentHourInt)) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    } //if time-block is equal to current date/time make class "present"
    else if (parseInt(dateHourInt) === parseInt(currentHourInt)) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
})
)