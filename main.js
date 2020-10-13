$(document).ready(function () {
  $('.slider').bxSlider({
    auto: true,
  });

  $.getJSON(
    'http://api.openweathermap.org/data/2.5/forecast?id=1835848&APPID=13cdeba27c6fb2e13ec8c19ec1410278&units=metric&lang=kr',
    function (data) {
      let seoul_tempt = data.list[0].main.temp;
      let seoul_lowtemp = data.list[0].main.temp_min;
      let seoul_hightemp = data.list[0].main.temp_max;
      let seoul_weather = data.list[0].weather[0].description;
      $('.seoul_tempt').append(seoul_tempt + "&deg;C");
      $('.seoul_lowtemp').append(seoul_lowtemp + "&nbsp;");
      $('.seoul_hightemp').append(seoul_hightemp);
      $('.seoul_weather').append(seoul_weather);
    }
  );

  $.getJSON(
    'http://api.openweathermap.org/data/2.5/forecast?id=1838524&APPID=13cdeba27c6fb2e13ec8c19ec1410278&units=metric&lang=kr',
    function (data) {
      let busan_tempt = data.list[0].main.temp;
      let busan_lowtemp = data.list[0].main.temp_min;
      let busan_hightemp = data.list[0].main.temp_max;
      let busan_weather = data.list[0].weather[0].description;
      $('.busan_tempt').append(busan_tempt + "&deg;C");
      $('.busan_lowtemp').append(busan_lowtemp + "&nbsp;");
      $('.busan_hightemp').append(busan_hightemp);
      $('.busan_weather').append(busan_weather);
    }
  );

  $.getJSON(
    'http://api.openweathermap.org/data/2.5/forecast?id=1846266&APPID=13cdeba27c6fb2e13ec8c19ec1410278&units=metric&lang=kr',
    function (data) {
      let jeju_tempt = data.list[0].main.temp;
      let jeju_lowtemp = data.list[0].main.temp_min;
      let jeju_hightemp = data.list[0].main.temp_max;
      let jeju_weather = data.list[0].weather[0].description;
      $('.jeju_tempt').append(jeju_tempt + "&deg;C");
      $('.jeju_lowtemp').append(jeju_lowtemp + "&nbsp;");
      $('.jeju_hightemp').append(jeju_hightemp);
      $('.jeju_weather').append(jeju_weather);
    }
  );
});
