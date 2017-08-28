import './iconfont.js'
import '../css/main.css'
import $ from 'jquery'
import goTop from './goTop'
import Carousel from './carousel'
import checkNews from './getAndWaterfallNews'

goTop()
checkNews()

new Carousel($('#header .carousel'), 5000)

$('.navbar .navbar-nav').on('click', 'li', function () {
    $(this).addClass('active')
        .siblings('li').removeClass('active');
});