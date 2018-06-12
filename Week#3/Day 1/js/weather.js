$('#getWeatherBtn').click(function () {
    console.log("ButtonClicked");
    const cityName = $('#cityInput').val();
    $.ajax({
        type: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=0da6a82fa60dee88e41a736655a427b5',

        error: function () {

        },
        success: function (data) {
            console.log(data);
            $('#tableDisp').removeClass('hideTable');
            $('#currentTemperature').text(Math.round(data.main.temp - 270));
            $('#currentHumidity').text(Math.round(data.main.humidity));
            $('#currentPressure').text(Math.round(data.main.pressure));
        }
    });
});
