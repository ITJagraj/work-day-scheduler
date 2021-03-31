$(document).ready(function () { // TO load the HTMl/CSS page 
//display the current date 
var today = moment().format('MMMM DD YYYY -  hh:mm:ss a');
$("#currentDay").text(today);

//assign saveBtn click listener
$(".saveBtn").click(function () {
    console.log(this);
    var test = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");


    //set items in the local storage
    localStorage.setItem(time, test);
})

//load any saved data from LocalStorage
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

function hour() {
    var currentHour = moment().hours();
    //loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("name"));

        console.log(blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");

        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

    })

}
hour();
setInterval( hour, 5000);
})




