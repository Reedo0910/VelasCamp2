 var cardVM = new Vue({
     el: '#card-group',
     data: {
         worksCards: [{
             name: 'Velas Website',
             description: 'Dedicate to showing personal favorites and hobbies.',
             image: './images/pic2.png',
             url: 'http://www.velas.xyz'
         }, {
             name: 'My Blog',
             description: 'Just write something.',
             image: './images/pic7.png',
             url: 'http://blog.velas.xyz'
         }, {
             name: 'Chat Room',
             description: 'A chat room demo based on React and Meteor.',
             image: './images/pic5.png',
             url: 'http://chat.velascamp.cn'
         }, {
             name: 'Aurora',
             description: 'A music player based on HTML5.',
             image: './images/pic6.png',
             url: 'http://aurora.velascamp.cn'
         }]
     }
 })

 window.onload = function time() {
     timeSet();
     var timer = setInterval(timeSet, 1000);
 }

 function timeSet() {
     var time = document.getElementById('time-panel');
     var now = new Date();
     var hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
     var minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
     time.innerHTML = hour + ':' + minute;
 }

 //获取天气
 Weather.getCurrent("Kansas City", function(current) {
  console.log(
    ["currently:",current.temperature(),"and",current.conditions()].join(" ")
  );
});

Weather.getForecast("Kansas City", function(forecast) {
  console.log("Forecast High in Kelvin: " + forecast.high());
  console.log("Forecast High in Fahrenheit" + Weather.kelvinToFahrenheit(forecast.high()));
  console.log("Forecast High in Celsius" + Weather.kelvinToCelsius(forecast.high()));
});