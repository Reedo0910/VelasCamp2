 var timePanel = new Vue({
     el: '#time-panel',
     data: {
         currentTime: '',
     },
     methods: {
         timeGet: function () {
             var now = new Date();
             var day = now.getDate();
             var month;
             var week;
             if (day == 1 || day == 21 || day == 31) {
                 day += 'st';
             } else if (day == 2 || day == 22) {
                 day += 'nd';
             } else if (day == 3 || day == 23) {
                 day += 'rd';
             } else {
                 day += 'th';
             }
             switch (now.getMonth()) {
                 case 0:
                     month = 'January';
                     break;
                 case 1:
                     month = 'February';
                     break;
                 case 2:
                     month = 'March';
                     break;
                 case 3:
                     month = 'April';
                     break;
                 case 4:
                     month = 'May';
                     break;
                 case 5:
                     month = 'June';
                     break;
                 case 6:
                     month = 'July';
                     break;
                 case 7:
                     month = 'August';
                     break;
                 case 8:
                     month = 'September';
                     break;
                 case 9:
                     month = 'October';
                     break;
                 case 10:
                     month = 'November';
                     break;
                 case 11:
                     month = 'December';
                     break;
                 default:
                     month = 'Unknown';
             }
             switch (now.getDay()) {
                 case 0:
                     week = 'Sunday';
                     break;
                 case 1:
                     week = 'Monday';
                     break;
                 case 2:
                     week = 'Tuesday';
                     break;
                 case 3:
                     week = 'Wednesday';
                     break;
                 case 4:
                     week = 'Thursday';
                     break;
                 case 5:
                     week = 'Friday';
                     break;
                 case 6:
                     week = 'Saturday';
                     break;
                 default:
                     week = 'Unknown';
             }
             this.currentTime = week + ', ' + month + ' ' + day;
         }
     },
     created: function () {
         this.timeGet();
     }
 });

 var cardVM = new Vue({
     el: '#card-group',
     data: {
         worksCards: [{
             name: 'Velas Website',
             description: 'Dedicate to showing personal favorites and hobbies.',
             image: './images/pic1.png',
             url: 'http://www.velas.xyz'
         }, {
             name: 'My Blog',
             description: 'Just write something.',
             image: './images/pic6.png',
             url: 'http://blog.velas.xyz'
         }, {
             name: 'Chat Room',
             description: 'A chat room demo based on React and Meteor.',
             image: './images/pic2.png',
             url: 'http://chat.velascamp.cn'
         }, {
             name: 'Aurora',
             description: 'A music player based on HTML5.',
             image: './images/pic7.png',
             url: 'http://aurora.velascamp.cn'
         }]
     }
 });

 var shareGroup = new Vue({
     el: 'footer',
     data: {
         iClass: 'fa fa-lg',
         infoText: '',
         shareIcons: [{
             url: 'https://github.com/Reedo0910',
             iconClass: 'fa-github',
             description: 'View me on Github.'
         }, {
             url: 'mailto:sea.sand@live.cn',
             iconClass: 'fa-envelope',
             description: 'Send me an Email.'
         }],

     }
 })