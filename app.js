function changeTitle() {
  var select = document.getElementById('inputGroupSelect03').value

  if (select === 'BG') {
    document.title = 'Holidays-BG'
  } else if (select === 'BG') {
    document.title = 'Holidays-DE'
  }
  console.log(select)
}

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
            console.log(monthString);
          } else {
            monthString = `0${(d.getMonth() + 1)}`;
            console.log(monthString);
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