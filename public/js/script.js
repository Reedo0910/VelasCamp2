// 为移动端绑定touchstart监听
document.body.addEventListener('touchstart', function () {});

var i18n = new VueI18n({
    locale: 'en',
    messages: messages,
    dateTimeFormats: dateTimeFormats
});

var logoText = new Vue({
    el: '#logo',
    i18n: i18n
});

var timePanel = new Vue({
    el: '#time-panel',
    i18n: i18n
});

var cardVM = new Vue({
    el: '#card-group',
    i18n: i18n,
    data: {
        key: '',
        placeholder: 'message.workscard.placeholder',
        isClearShow: false,
        isAdapt: 'fa fa-mobile',
        categories: [{
            id: 'Website',
            name: 'message.workscard.category.website'
        }, {
            id: 'Demo',
            name: 'message.workscard.category.demo'
        }, {
            id: 'Playground',
            name: 'message.workscard.category.playground'
        }],
        worksCards: [{
            name: 'message.workscard.title.velas',
            description: 'message.workscard.description.velas',
            image: './images/pic1.png',
            url: 'http://www.velas.xyz',
            category: 'Website',
            mobile: true
        }, {
            name: 'message.workscard.title.talk',
            description: 'message.workscard.description.talk',
            image: './images/pic6.png',
            url: 'http://blog.velas.xyz',
            category: 'Website',
            mobile: true
        }, {
            name: 'message.workscard.title.chatroom',
            description: 'message.workscard.description.chatroom',
            image: './images/pic2.png',
            url: 'http://chat.velascamp.cn',
            category: 'Demo',
            mobile: true
        }, {
            name: 'message.workscard.title.aurora',
            description: 'message.workscard.description.aurora',
            image: './images/pic7.png',
            url: 'http://aurora.velascamp.cn',
            category: 'Demo',
            mobile: false
        }, {
            name: 'message.workscard.title.vuelogin',
            description: 'message.workscard.description.vuelogin',
            image: './images/pic8.png',
            url: 'http://www.velascamp.cn/playground/vuelogin/index.html',
            category: 'Playground',
            mobile: true
        }, {
            name: 'message.workscard.title.processscheduling',
            description: 'message.workscard.description.processscheduling',
            image: './images/pic3.png',
            url: 'http://www.velascamp.cn/demo/1/index.html',
            category: 'Demo',
            mobile: true
        }, {
            name: 'message.workscard.title.savewhales',
            description: 'message.workscard.description.savewhales',
            image: './images/pic5.png',
            url: 'http://savewhales.velascamp.cn/',
            category: 'Website',
            mobile: true
        }]
    },
    computed: {
        filterCards: function () {
            var key = this.key;
            var that = this;
            var worksCards = this.worksCards;
            return worksCards.filter(function (workscard) {
                return that.getMessage(workscard.name).toLowerCase().indexOf(key.toLowerCase()) != -1
            });
        }
    },
    watch: {
        key: function () {
            this.key != '' ? this.isClearShow = true : this.isClearShow = false;
        }
    },
    methods: {
        categoryCount: function (c) {
            var cards = this.filterCards;
            var count = 0;
            for (i in cards) {
                cards[i].category === c ? count++ : '';
            }
            return count;
        },
        getMessage: function (key) {
            return this.$t(key)
        }
    }
});

var shareGroup = new Vue({
    el: 'footer',
    i18n: i18n,
    data: {
        iClass: 'fa fa-lg',
        infoText: '',
        isInfoShow: false,
        shareIcons: [{
            url: 'https://github.com/Reedo0910',
            iconClass: 'fa-github',
            description: 'message.sharegroup.github'
        }, {
            url: 'mailto:sea.sand@live.cn',
            iconClass: 'fa-envelope',
            description: 'message.sharegroup.email'
        }, {
            iconClass: 'fa-question',
            description: 'message.sharegroup.notice'
        }],
        globeDescription: 'message.sharegroup.globe'
    },
    methods: {
        getMessage: function (key) {
            return this.$t(key)
        },
        toggleLang: function (lang) {
            if (i18n.locale === 'en') {
                i18n.locale = 'zh';
                document.getElementsByTagName('html')[0].lang = 'zh-Hans';
            } else {
                i18n.locale = 'en';
                document.getElementsByTagName('html')[0].lang = 'en';
            }
        }
    },
    created: function () {
        var language = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language);
        var lang = language.substr(0, 2);
        if (lang === 'en') {
            i18n.locale = 'en';
            document.getElementsByTagName('html')[0].lang = 'en';
        } else if (lang === 'zh') {
            i18n.locale = 'zh';
            document.getElementsByTagName('html')[0].lang = 'zh-Hans';
        } else {
            i18n.locale = 'en';
            document.getElementsByTagName('html')[0].lang = 'en';
        }
    }
})