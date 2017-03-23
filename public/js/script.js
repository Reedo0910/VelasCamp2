 var timePanel = new Vue({
     el: '#time-panel',
     data: {
         currentTime: '',
     },
     methods: {
         timeGet: function () {
             var now = new Date();
             var hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
             var minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
             this.currentTime = hour + ':' + minute;
         }
     },
     created: function () {
         this.timeGet();
         setInterval(this.timeGet, 1000);
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
         iClass:'fa fa-lg',
         infoText:'',
         shareIcons: [{
                 url: 'https://github.com/Reedo0910',
                 iconClass: 'fa-github',
                 description: 'View me on Github.'
             }, {
                 url: 'mailto:sea.sand@live.cn',
                 iconClass: 'fa-envelope',
                 description: 'Send me an Email.'
             }
         ],

     }
 })