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
        console.log("Getting holidays");
        // fetchData();

        var holidayUrl = `https://holidayapi.com/v1/holidays?key=e2a15814-aca6-4e89-a057-d658e84035a9&country=BG&year=2017&month=12`;
        var jax = $.ajax({
            url: holidayUrl,
            type: "GET",
            success: function (xml) {
                console.log(xml);
            }

        });

    });
});