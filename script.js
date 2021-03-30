//function to retrieve input data
$(document).ready(function () {
    var keys = Object.keys(localStorage);
    for ( i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        var temp = $("#" + keys[i]).find("textarea")
        temp.val(value);
    }
    //click event to save data to local storage
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var textVal = $(this).siblings(".description").val();
        var timeVal= $(this).parent().attr("id");

        localStorage.setItem(textVal, timeVal);
    });

    //webpage to always display current date and time
    $("#currentDay").text(moment().format("LLL"));
    function dispDateTime() {
        var currentHours = moment().hours();

        $(".time-block").each(function () {
            var hourEl = $(this).attr("id");
            var hourDay = hourEl.substring(5, hourEl.length);
            var hrDayInt = parseInt(hourDay)
            var currentHrInt = parseInt(currentHours);
            if (parseInt(hrDayInt) < parseInt(currentHrInt)) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (parseInt(hrDayInt) > parseInt(currentHrInt)) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
            else if (parseInt(hrDayInt) === parseInt(currentHrInt)) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
        })
    };
    dispDateTime();
});