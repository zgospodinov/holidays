function fetchData() {
    // var dogApi = 'https://random.dog/woof.json';
    // var holidayUrl = `http://date.nager.at/api/v1/get/BG/2018`;
    var apiKey = 'e2a15814-aca6-4e89-a057-d658e84035a9';

    var holidayUrl = `  https://holidayapi.com/v1/holidays?key=e2a15814-aca6-4e89-a057-d658e84035a9&country=BG&year=2018&month=12`

    // $.getJSON(holidayUrl, data,
    //     function (data, textStatus, jqXHR) {
    //         console.log(jqXHR);
    //     }
    // );

    $.ajax({
        type: "POST",
        url: holidayUrl,
        contentType: "text/xml; charset=utf-8",
        processData: false,
        async: true,
        dataType: "xml",
        success: function (xml) {
            console.log(xml);
        }

    });


    // fetch(holidayUrl)
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json);

    //     })
};


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

        var holidayUrl = `http://date.nager.at/api/v1/get/BG/2018`;
        var jax = $.ajax({
            url: holidayUrl,
            success: function (xml) {
                console.log(xml);
            }

        });

    });
});

function getHolidays() {
    console.log("Getting holidays");
    // fetchData();

    var holidayUrl = `http://date.nager.at/api/v1/get/BG/2018`;
    $.ajax({
        type: "POST",
        url: holidayUrl,
        contentType: "text/xml; charset=utf-8",
        processData: false,
        async: true,
        dataType: "xml",
        success: function (xml) {
            console.log(xml);
        }

    });
};