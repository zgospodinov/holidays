function changeTitle() {
    var select = document.getElementById("inputGroupSelect03").value;

    if (select === "1") {
        document.title = "Holidays-BG"
    } else if (select === "2") {
        document.title = "Holidays-DE"
    }
    console.log(select);
};

$(document).ready(function () {

    $("#fetchBtn").click(function (e) {
        var apiKey = "a777a81982d82a4fa8d82983aae77c9ded59de6a";
        var country, year;

        console.log("Getting holidays");

        var select = document.getElementById("inputGroupSelect03").value;
        if (select === "1") {
            document.title = "Holidays-BG"
        } else if (select === "2") {
            document.title = "Holidays-DE"
        }

        // fetchData();
        // var holidayUrl = `https://www.calendarindex.com/api/v1/holidays?country=${country}&year=${year}&api_key=${apiKey}`;
        var holidayUrl = `https://www.calendarindex.com/api/v1/holidays?country=BG&year=2019&api_key=${apiKey}`;
        var jax = $.ajax({
            url: holidayUrl,
            type: "GET",
            success: function (xml) {
                console.log(xml);
            }

        });

    });


});