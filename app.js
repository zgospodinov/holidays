var countries = {
  BG: "Bulgaria",
  DE: "Germany"
}
var testing = true;
var mockupResponse = {
  "meta": {
    "code": 200
  },
  "response": {
    "holidays": [{
        "date": "2018-01-01 00:00:00",
        "start": "2017-12-31T22:00:00.000Z",
        "end": "2018-01-01T22:00:00.000Z",
        "name": "Нова Година",
        "type": "public"
      },
      {
        "date": "2018-03-01 00:00:00",
        "start": "2018-02-28T22:00:00.000Z",
        "end": "2018-03-01T22:00:00.000Z",
        "name": "Баба Марта",
        "type": "observance"
      },
      {
        "date": "2018-03-03 00:00:00",
        "start": "2018-03-02T22:00:00.000Z",
        "end": "2018-03-03T22:00:00.000Z",
        "name": "Ден на Освобождението на България от Османската Империя",
        "type": "public"
      },
      {
        "date": "2018-03-08 00:00:00",
        "start": "2018-03-07T22:00:00.000Z",
        "end": "2018-03-08T22:00:00.000Z",
        "name": "Ден на жената",
        "type": "observance"
      },
      {
        "date": "2018-04-06 00:00:00",
        "start": "2018-04-05T21:00:00.000Z",
        "end": "2018-04-06T21:00:00.000Z",
        "name": "Разпети петък",
        "type": "public"
      },
      {
        "date": "2018-04-08 00:00:00",
        "start": "2018-04-07T21:00:00.000Z",
        "end": "2018-04-08T21:00:00.000Z",
        "name": "Великден",
        "type": "public"
      },
      {
        "date": "2018-04-09 00:00:00",
        "start": "2018-04-08T21:00:00.000Z",
        "end": "2018-04-09T21:00:00.000Z",
        "name": "Велики понеделник",
        "type": "public"
      },
      {
        "date": "2018-05-01 00:00:00",
        "start": "2018-04-30T21:00:00.000Z",
        "end": "2018-05-01T21:00:00.000Z",
        "name": "Ден на труда",
        "type": "public"
      },
      {
        "date": "2018-05-06 00:00:00",
        "start": "2018-05-05T21:00:00.000Z",
        "end": "2018-05-06T21:00:00.000Z",
        "name": "Гергьовден",
        "type": "public"
      },
      {
        "date": "2018-05-07 00:00:00",
        "start": "2018-05-06T21:00:00.000Z",
        "end": "2018-05-07T21:00:00.000Z",
        "name": "Ден на радиото и телевизията",
        "type": "observance"
      },
      {
        "date": "2018-05-24 00:00:00",
        "start": "2018-05-23T21:00:00.000Z",
        "end": "2018-05-24T21:00:00.000Z",
        "name": "Ден на азбуката, културата и просветата",
        "type": "public"
      },
      {
        "date": "2018-09-06 00:00:00",
        "start": "2018-09-05T21:00:00.000Z",
        "end": "2018-09-06T21:00:00.000Z",
        "name": "Ден на съединението",
        "type": "public"
      },
      {
        "date": "2018-09-22 00:00:00",
        "start": "2018-09-21T21:00:00.000Z",
        "end": "2018-09-22T21:00:00.000Z",
        "name": "Ден на независимостта",
        "type": "public"
      },
      {
        "date": "2018-11-01 00:00:00",
        "start": "2018-10-31T22:00:00.000Z",
        "end": "2018-11-01T22:00:00.000Z",
        "name": "Ден на народните будители",
        "type": "school"
      },
      {
        "date": "2018-12-24 00:00:00",
        "start": "2018-12-23T22:00:00.000Z",
        "end": "2018-12-24T22:00:00.000Z",
        "name": "Бъдни вечер",
        "type": "public"
      },
      {
        "date": "2018-12-25 00:00:00",
        "start": "2018-12-24T22:00:00.000Z",
        "end": "2018-12-25T22:00:00.000Z",
        "name": "Коледа",
        "type": "public"
      },
      {
        "date": "2018-12-26 00:00:00",
        "start": "2018-12-25T22:00:00.000Z",
        "end": "2018-12-26T22:00:00.000Z",
        "name": "2-ри ден на Коледа",
        "type": "observance"
      }
    ]
  }
}

// console.log(countries["BG"]);

function changeTitle() {
  var select = document.getElementById('inputGroupSelect03').value
  var appWelcome = $("#appWelcome");

  if (select === 'BG') {
    document.title = 'BG-Holidays';

  } else if (select === 'DE') {
    document.title = 'DE-Holidays'
  }
  appWelcome.html(`<h4>Bank Holidays - ${countries[select]}</h4>`);

}

if (testing !== true) {
  console.log("Connecting to API")
  $(document).ready(function () {
    $('#fetchBtn').click(function (e) {
      var apiKey = 'a777a81982d82a4fa8d82983aae77c9ded59de6a'
      var country, year

      // console.log('Getting holidays')

      var country = document.getElementById('inputGroupSelect03').value;
      var year = document.getElementById('inputGroupSelect04').value;
      // console.log(year);

      var holidayUrl = `https://www.calendarindex.com/api/v1/holidays?country=${country}&year=${year}&api_key=${apiKey}`
      var jax = $.ajax({
        url: holidayUrl,
        type: 'GET',
        success: function (json) {
          // console.log(json)
          var holidays = json.response.holidays
          // console.log(holidays[0])        

          var tableBody = $('#tbody')
          tableBody.empty()

          for (let i = 0, len = holidays.length; i < len; i++) {
            var holiday = holidays[i]
            var d = new Date(holiday.date)
            // console.log(d.getMonth().toString().length);

            var monthString;
            if ((d.getMonth() + 1).toString().length > 1) {
              monthString = (d.getMonth() + 1);
              // console.log(monthString);
            } else {
              monthString = `0${(d.getMonth() + 1)}`;
              // console.log(monthString);
            }

            // var dateFormatted = d.getDate() + '/' + (d.getMonth() + 1);
            var dateFormatted = d.getDate() + '/' + monthString;

            var name = holiday.name

            var holidayRecord =
              `<tr>
                <td>${dateFormatted}</td>
                <td>${name}</td>
            </tr>`;

            tableBody.append(holidayRecord)
          }
        }

      })
    })
  })
} else {
  console.log("Connecting to FAKE")
  fakeCAll(mockupResponse);
}

function fakeCAll(json) {
  // console.log(json)
  var holidays = json.response.holidays
  // console.log(holidays[0])        

  var tableBody = $('#tbody')
  tableBody.empty()

  for (let i = 0, len = holidays.length; i < len; i++) {
    var holiday = holidays[i]
    var d = new Date(holiday.date)
    // console.log(d.getMonth().toString().length);

    var monthString;
    if ((d.getMonth() + 1).toString().length > 1) {
      monthString = (d.getMonth() + 1);
      // console.log(monthString);
    } else {
      monthString = `0${(d.getMonth() + 1)}`;
      // console.log(monthString);
    }

    // var dateFormatted = d.getDate() + '/' + (d.getMonth() + 1);
    var dateFormatted = d.getDate() + '/' + monthString;

    var name = holiday.name

    var holidayRecord =
      `<tr>
          <td>${dateFormatted}</td>
          <td>${name}</td>
      </tr>`;

    tableBody.append(holidayRecord)
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}