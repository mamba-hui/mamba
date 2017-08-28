webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _goTop = __webpack_require__(4);

var _goTop2 = _interopRequireDefault(_goTop);

var _carousel = __webpack_require__(6);

var _carousel2 = _interopRequireDefault(_carousel);

var _getAndWaterfallNews = __webpack_require__(8);

var _getAndWaterfallNews2 = _interopRequireDefault(_getAndWaterfallNews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _goTop2.default)();
(0, _getAndWaterfallNews2.default)();

new _carousel2.default((0, _jquery2.default)('#header .carousel'), 5000);

(0, _jquery2.default)('.navbar .navbar-nav').on('click', 'li', function () {
    (0, _jquery2.default)(this).addClass('active').siblings('li').removeClass('active');
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (window) {
  var svgSprite = "<svg>" + "" + '<symbol id="icon-facebook" viewBox="0 0 1000 1000">' + "" + '<path d="M488.5908266666666 11.377777777777851C225.81365333333338 11.377777777777851 12.799999999999955 224.39143111111116 12.799999999999955 487.1686044444444 12.799999999999955 749.8393244444445 225.81365333333338 962.8529777777778 488.5908266666666 962.8529777777778S964.2752000000003 749.8393244444445 964.2752000000003 487.1686044444444C964.2752000000003 224.39143111111116 751.2615466666666 11.377777777777851 488.5908266666666 11.377777777777851zM614.4383999999999 485.1439644444444h-82.37096237096237c0 131.70826666666667 0 293.78624 0 293.78624H409.9495171495171c0 0 0-160.47957333333335 0-293.78624h-58.07525807525808v-103.68298368298366h58.07525807525808v-67.23942723942724c0-48.16512 22.803839999999997-123.18346666666666 123.29002666666666-123.18346666666666l90.36298666666667 0.31968v100.6993006993007c0 0-54.98506666666666 0-65.64106666666666 0-10.656 0-25.894079999999995 5.328-25.894079999999995 28.2384v61.05894105894106h93.02697302697304L614.4383999999999 485.1439644444444z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-shipin" viewBox="0 0 1024 1024">' + "" + '<path d="M853.436416 433.415168 377.30816 433.415168 843.941888 285.934592c36.307968-11.454464 56.511488-50.328576 45.019136-86.636544L861.688832 112.970752c-11.475968-36.292608-50.327552-56.487936-86.63552-45.003776L144.241664 267.336704c-36.308992 11.461632-56.496128 50.351104-45.026304 86.629376l27.271168 86.31808c2.152448 6.796288 5.257216 13.022208 9.124864 18.582528-11.757568 13.273088-18.960384 30.665728-18.960384 49.752064l0 376.121344c0 41.454592 33.741824 75.204608 75.211776 75.204608l661.572608 0c41.469952 0 75.218944-33.750016 75.218944-75.204608L928.654336 508.618752C928.65536 467.1488 894.906368 433.415168 853.436416 433.415168zM802.353152 124.019712c2.189312 1.449984 4.023296 3.482624 4.866048 6.166528l27.300864 86.326272c1.982464 6.255616-1.522688 12.985344-7.793664 14.974976l-42.533888 13.428736L802.353152 124.019712zM639.72864 170.635264l72.424448-22.879232-18.929664 125.917184-72.424448 22.90176L639.72864 170.635264zM476.34944 222.272512l72.438784-22.8864-18.945024 125.925376-72.454144 22.90176L476.34944 222.272512zM312.967168 273.932288l72.416256-22.908928-18.945024 125.917184-72.409088 22.908928L312.967168 273.932288zM161.456128 321.805312l60.548096-19.144704-18.930688 125.939712-7.150592 2.255872c-6.263808 1.98144-12.977152-1.51552-14.959616-7.786496l-27.286528-86.303744C151.688192 330.486784 155.185152 323.787776 161.456128 321.805312zM859.189248 884.740096c0 3.165184-2.573312 5.738496-5.752832 5.738496L191.863808 890.478592c-3.172352 0-5.753856-2.574336-5.753856-5.738496L186.109952 508.618752c0-3.165184 2.581504-5.738496 5.753856-5.738496l661.572608 0c3.17952 0 5.752832 2.573312 5.752832 5.738496L859.189248 884.740096z"  ></path>' + "" + '<path d="M489.837568 568.124416c-11.314176-9.739264-28.351488-12.637184-43.096064-7.395328-14.789632 5.265408-24.41728 17.666048-24.41728 31.442944l0 209.051648c0 13.740032 9.627648 26.133504 24.41728 31.383552 4.895744 1.760256 10.042368 2.603008 15.1296 2.603008 10.278912 0 20.395008-3.46112 27.967488-9.938944L611.377152 720.724992c15.469568-13.26592 15.469568-34.798592 0-48.095232L489.837568 568.124416z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-linkedin" viewBox="0 0 1024 1024">' + "" + '<path d="M489.8200976041667 970.6666497916666C225.69311791666664 970.6666497916666 10.666666666666668 755.6401985416666 10.666666666666668 489.8200976041667 10.666666666666668 225.69311791666664 225.69311791666664 10.666666666666668 489.8200976041667 10.666666666666668 755.6401985416666 10.666666666666668 970.6666497916666 225.69311791666664 970.6666497916666 489.8200976041667 970.6666497916666 755.6401985416666 755.6401985416666 970.6666497916666 489.8200976041667 970.6666497916666M356.0634860416667 391.61904072916667l-93.12169125 0 0 299.682534375 93.12169125 0L356.0634860416667 391.61904072916667zM364.5290941666667 301.8835929166667c0-28.7830678125-22.010581875-52.486771874999995-55.8730153125-52.486771874999995-33.8624334375 0-57.566136562500006 22.010581875-57.566136562500006 52.486771874999995 0 28.7830678125 22.010581875 52.486771874999995 55.8730153125 52.486771874999995l0 0C342.5185122916667 354.37036385416667 364.5290941666667 332.3597829166667 364.5290941666667 301.8835929166667zM730.2433732291667 525.3756522916666c0-93.12169125-52.486771874999995-135.4497328125-118.51851656250001-135.4497328125-54.179893125 0-86.349204375 28.7830678125-93.12169125 49.1005284375l0-47.40740625-104.9735428125 0c1.69312125 25.3968253125 0 299.682534375 0 299.682534375L518.6031654166667 691.3015751041667l0-162.539679375c0-8.465608125000001 0-18.6243384375 1.69312125-23.703703125 6.772486875-18.6243384375 22.010581875-37.248676875 50.7936496875-37.248676875 37.248676875 0 52.486771874999995 27.0899465625 52.486771874999995 67.724866875l0 155.7671934375 106.66666500000001 0L730.2433732291667 525.3756522916666z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-tupian" viewBox="0 0 1024 1024">' + "" + '<path d="M975.36 97.6 48.64 97.6C21.76 97.6 0 119.359 0 146.24l0 731.52C0 904.64 21.76 926.4 48.64 926.4l926.72 0c26.88 0 48.64-21.761 48.64-48.641L1024 146.24C1024 119.359 1002.24 97.6 975.36 97.6zM926.08 664.64 746.24 484.8c-21.76-21.76-57.601-21.76-79.36 0L455.68 696l-90.239-90.88c-19.841-19.84-52.48-19.84-72.96 0l-192 192c-1.92-5.12-3.2-10.88-3.2-17.28L97.281 243.52c0-26.88 21.76-48.64 48.64-48.64L877.44 194.88c26.88 0 48.64 21.76 48.64 48.64L926.08 664.64z"  ></path>' + "" + '<path d="M316.8 292.8c-53.76 0-97.28 43.52-97.28 97.28 0 53.76 43.52 97.28 97.28 97.28s97.28-43.521 97.28-97.28C414.08 336.319 370.56 292.8 316.8 292.8z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-twitter" viewBox="0 0 1024 1024">' + "" + '<path d="M279.18715259259255 314.09559703703707"  ></path>' + "" + '<path d="M492.2368000000001 16.11918222222226c-266.2946133333333 0-482.13560888888884 215.84099555555554-482.13560888888884 482.13560888888884s215.84099555555554 482.13560888888884 482.13560888888884 482.13560888888884 482.13560888888884-215.84099555555554 482.13560888888884-482.13560888888884S758.5314133333333 16.11918222222226 492.2368000000001 16.11918222222226zM737.4567348148147 405.86116740740744c-2.7215644444444447 205.79214222222222-134.33362962962963 346.7552237037038-330.7747555555556 355.61775407407407-81.01888 3.6985362962962967-139.7069748148148-22.470352592592597-190.78864592592592-54.91977481481482 59.87441777777778 9.560367407407407 134.1242785185185-14.37544296296296 173.83120592592593-48.36010666666667-58.68809481481481-5.722263703703703-93.44037925925926-35.589688888888894-109.69998222222223-83.67066074074074 16.957440000000002 2.9309155555555555 34.82206814814815 2.1632948148148152 50.9421037037037-1.2561066666666667-52.965831111111115-17.72506074074074-90.78859851851851-50.45361777777778-92.74254222222223-119.05099851851853 14.86392888888889 6.7690192592592595 30.35591111111111 13.119336296296296 50.9421037037037 14.37544296296296-39.63714370370369-22.540136296296296-68.94629925925926-104.95469037037037-35.380337777777775-159.45576296296298C312.61354666666676 373.6210962962963 383.3742222222223 426.2380088888889 499.5640888888889 433.35594666666674c-29.169588148148147-124.70347851851852 136.07822222222222-192.3238874074074 205.2338725925926-108.51365925925924 29.23937185185185-5.652480000000001 53.035614814814814-16.74808888888889 75.92466962962963-28.820669629629627-9.420800000000002 28.960237037037036-27.564562962962963 49.19751111111111-49.68599703703703 65.38733037037038 24.284728888888885-3.279834074074074 45.778109629629625-9.211448888888889 64.13122370370371-18.283330370370372C783.793114074074 366.7822933333333 758.8803318518518 387.9965392592593 737.4567348148147 405.86116740740744z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-zazhiyulan" viewBox="0 0 1187 1024">' + "" + '<path d="M1013.229742 590.870523c-9.984108 0-18.946221 3.144601-25.392653 8.21527l0-22.955587c0-19.024836-15.95885-34.472688-35.691221-34.472688-14.347242 0-26.571878 8.21527-32.23216 19.968216l0-14.661702c0-18.946221-15.95885-34.472688-35.612606-34.472688-13.050094 0-24.33135 6.839507-30.541937 16.980845l0-120.595447c0-19.024836-15.95885-34.394073-35.691221-34.394073-19.653756 0-35.612606 15.369237-35.612606 34.394073l0 252.511458-0.078615-0.078615-15.80162 11.438486 0-80.148017c0-14.976162-15.95885-27.043568-35.612606-27.043568-19.732371 0-35.691221 12.067406-35.691221 27.043568l0 145.791563-0.47169 0 0 56.209742c0 60.572876 32.625235 113.795248 81.68101 144.179955l0 85.218686 201.92269 0 0-92.647806c42.845188-31.249472 70.556984-80.855553 70.556984-136.750835l0-176.569345C1048.842348 602.977237 1032.962113 590.870523 1013.229742 590.870523zM675.499597 386.78592l69.181221 0c9.984108-31.721162 39.071667-54.83398 73.30851-54.83398 34.315458 0 63.403017 23.112817 73.387125 54.83398l135.414379 0L1026.790833 330.301025l-351.330544 0L675.460289 386.78592zM675.499597 519.291544l65.486315 0 0-56.524203-65.486315 0L675.499597 519.291544zM945.502898 509.346743c2.240528-0.15723 4.363134-0.235845 6.603662-0.235845 13.679014 0 26.414648 3.773521 37.538674 10.219953l37.145599 0 0-56.524203-131.758781 0 0 16.194695C915.550574 481.910099 933.514107 493.191355 945.502898 509.346743zM920.385398 197.559556c0 41.54804 32.939695 75.234578 73.46574 75.234578l96.421327 0-169.887068-173.857126L920.385398 197.559556zM675.499597 197.874016l0 56.524203 202.433688 0c-8.05804-17.138075-12.657019-36.241526-12.735634-56.524203L675.499597 197.874016zM1047.623815 0 139.227208 0C62.302407 0-0.039308 65.25047-0.039308 145.752255L-0.039308 687.881463c0 80.462477 62.341714 145.634333 139.266516 145.634333L654.077003 833.515796c-0.235845-4.756209-0.78615-9.512418-0.78615-14.347242l0-84.432536-39.150282 0L614.14057 98.937008l306.244827 0 127.199109 0c23.505892 0 42.687958 20.950904 42.687958 46.815247L1090.272466 272.794135l0 546.374419c0 2.515681-0.31446 4.992054-0.393075 7.507735 56.209742-18.749683 96.971633-73.7802 96.971633-138.794826L1186.851023 145.752255C1186.890331 65.25047 1124.548616 0 1047.623815 0zM572.710453 734.736018 139.227208 734.736018c-23.505892 0-42.687958-21.029519-42.687958-46.815247L96.53925 145.752255c0-25.864343 19.182066-46.815247 42.687958-46.815247L572.710453 98.937008 572.710453 734.736018zM590.949138 77.160646c-15.880235 0-28.694484-13.128709-28.694484-29.362712s12.814249-29.402019 28.694484-29.402019 28.694484 13.168017 28.694484 29.402019S606.868681 77.160646 590.949138 77.160646zM511.587271 595.233657 160.178112 595.233657l0 56.524203 351.369851 0L511.547964 595.233657zM511.587271 197.874016 160.178112 197.874016l0 56.524203 351.369851 0L511.547964 197.874016zM511.587271 330.301025 160.178112 330.301025 160.178112 386.78592l351.369851 0L511.547964 330.301025zM511.587271 462.806648 160.178112 462.806648l0 56.524203 351.369851 0L511.547964 462.806648z"  ></path>' + "" + "</symbol>" + "" + "</svg>";var script = function () {
    var scripts = document.getElementsByTagName("script");return scripts[scripts.length - 1];
  }();var shouldInjectCss = script.getAttribute("data-injectcss");var ready = function ready(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function loadFn() {
          document.removeEventListener("DOMContentLoaded", loadFn, false);fn();
        };document.addEventListener("DOMContentLoaded", loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }function IEContentLoaded(w, fn) {
      var d = w.document,
          done = false,
          init = function init() {
        if (!done) {
          done = true;fn();
        }
      };var polling = function polling() {
        try {
          d.documentElement.doScroll("left");
        } catch (e) {
          setTimeout(polling, 50);return;
        }init();
      };polling();d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;init();
        }
      };
    }
  };var before = function before(el, target) {
    target.parentNode.insertBefore(el, target);
  };var prepend = function prepend(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };function appendSvg() {
    var div, svg;div = document.createElement("div");div.innerHTML = svgSprite;svgSprite = null;svg = div.getElementsByTagName("svg")[0];if (svg) {
      svg.setAttribute("aria-hidden", "true");svg.style.position = "absolute";svg.style.width = 0;svg.style.height = 0;svg.style.overflow = "hidden";prepend(svg, document.body);
    }
  }if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }ready(appendSvg);
})(window);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getGoTop;

var _goTopModule = __webpack_require__(5);

var _goTopModule2 = _interopRequireDefault(_goTopModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function show(node) {
    node.classList.add(_goTopModule2.default.show);
}
function hide(node) {
    node.classList.remove(_goTopModule2.default.show);
}

function getGoTop() {
    var node = document.createElement('div');
    node.classList.add(_goTopModule2.default.goTop);
    document.body.appendChild(node);
    var timeoutID = void 0;
    window.addEventListener('scroll', function () {
        timeoutID && clearTimeout(timeoutID);
        setTimeout(function () {
            document.body.scrollTop > 200 ? show(node) : hide(node);
        }, 200);
    });
    node.addEventListener('click', function () {
        document.body.scrollTop = 0;
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"goTop":"_225g-IeGFL_hsRo2A0jhH_","show":"y5SfbAYsX6eB8OfOqsEJh"};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _carouselModule = __webpack_require__(7);

var _carouselModule2 = _interopRequireDefault(_carouselModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel = function () {
    function Carousel($ct, interval) {
        _classCallCheck(this, Carousel);

        this.interval = interval;
        this.$ct = $ct;
        this.createDom();
        this.init();
        this.bind();
        this.autoplay();
    }

    _createClass(Carousel, [{
        key: 'createDom',
        value: function createDom() {
            var template = '\n            <ul class=' + _carouselModule2.default.imageWrap + '><li></li><li></li><li></li><li></li><li></li></ul>\n            <div class="' + [_carouselModule2.default.arrow, _carouselModule2.default.prev].join(' ') + '">&lt;</div>\n            <div class="' + [_carouselModule2.default.arrow, _carouselModule2.default.next].join(' ') + '">&gt;</div>\n            <ul class=' + _carouselModule2.default.indicator + '>\n                <li class=' + _carouselModule2.default.active + '></li>\n                <li></li>\n                <li></li>\n                <li></li>\n                <li></li>\n            </ul>\n        ';
            this.$ct.html(template);
            this.$imgWrap = this.$ct.find('.' + _carouselModule2.default.imageWrap);
            this.$imgs = this.$imgWrap.children();
            this.$prevBtn = this.$ct.find('.' + _carouselModule2.default.prev);
            this.$nextBtn = this.$ct.find('.' + _carouselModule2.default.next);
            this.$indicator = this.$ct.find('.' + _carouselModule2.default.indicator);
            this.imgCount = this.$imgs.length;
            this.$ct.addClass(_carouselModule2.default.carousel);
            this.$imgWrap.prepend(this.$imgs.last().clone()).append(this.$imgs.first().clone());
        }
    }, {
        key: 'init',
        value: function init() {
            this.imgWidth = this.$imgWrap.find('li').width(this.$ct.width()).width();
            this.$imgWrap.css({
                'left': -this.imgWidth,
                'width': this.imgWidth * (this.imgCount + 2)
            });
            this.idx = 0;
            this.isAinmated = false;
        }
    }, {
        key: 'bind',
        value: function bind() {
            var _this = this;

            var self = this;
            (0, _jquery2.default)(window).on('resize', function () {
                _this.init();
            });
            this.$prevBtn.click(function () {
                _this.checkPlay(-1);
            });
            this.$nextBtn.click(function () {
                _this.checkPlay(1);
            });
            this.$indicator.on('click', 'li', function () {
                self.checkPlay((0, _jquery2.default)(this).index() - self.idx);
            });
        }
    }, {
        key: 'checkPlay',
        value: function checkPlay(num) {
            if (!this.isAinmated) {
                this.isAinmated = true;
                this.play(num);
            }
        }
    }, {
        key: 'play',
        value: function play(num) {
            var _this2 = this;

            this.$imgWrap.animate({ 'left': '-=' + this.imgWidth * num }, function () {
                _this2.idx = (_this2.idx + num + _this2.imgCount) % _this2.imgCount;
                _this2.$imgWrap.css({ 'left': -_this2.imgWidth * (_this2.idx + 1) });
                _this2.setIndicator();
                _this2.isAinmated = false;
            });
        }
    }, {
        key: 'setIndicator',
        value: function setIndicator() {
            this.$indicator.find('li').removeClass(_carouselModule2.default.active).eq(this.idx).addClass(_carouselModule2.default.active);
        }
    }, {
        key: 'autoplay',
        value: function autoplay() {
            var _this3 = this;

            this.timeoutID = setTimeout(function () {
                _this3.checkPlay(1);
                _this3.autoplay();
            }, this.interval);
        }
    }, {
        key: 'stopAuto',
        value: function stopAuto() {
            clearTimeout(this.timeoutID);
        }
    }]);

    return Carousel;
}();

exports.default = Carousel;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"carousel":"_1Y0Umt45YVxWUzz0LeU_CB","imageWrap":"_1UJMKUZk0J1ApDOsYmJpcr","arrow":"wu-oCTW1tk2GjrHbOAQ9p","prev":"CsJ4k6mFb4jSppOVg_aV5","next":"_3P8bVGGVo7wVdT1jtkdrpH","indicator":"_2BDcQENjSanq73ctYXlyDD","active":"p5lTJ6Vc542RQNdEOLY-P"};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _waterfall = __webpack_require__(9);

var _waterfall2 = _interopRequireDefault(_waterfall);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _getAndWaterNewsModule = __webpack_require__(10);

var _getAndWaterNewsModule2 = _interopRequireDefault(_getAndWaterNewsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $newsCt = (0, _jquery2.default)('.waterfall-ct .news'),
    $loadMore = (0, _jquery2.default)('#load-more');
var curPage = 1,
    perPageCount = 6,
    isLoading = false;

var $waterfallDemo = (0, _jquery2.default)('<li id="hide"></li>');
$newsCt.append($waterfallDemo);
var waterfallObj = new _waterfall2.default($waterfallDemo);

$loadMore.click(function () {
    checkNews();
});

function checkNews() {
    if (!isLoading) {
        isLoading = true;
        getNews();
    }
}

function getNews() {
    _jquery2.default.ajax({
        url: 'https://platform.sina.com.cn/slide/album_tech',
        type: 'get',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        data: {
            app_key: '1271687855',
            page: curPage,
            num: perPageCount
        }
    }).done(function (ret) {
        if (ret && ret.status && ret.status.code === '0') {
            placeAndWaterfall(ret.data);
        } else {
            console.log('数据错误');
            curPage++;
            isLoading = false;
        }
    }).fail(function () {
        alert('请求发送错误');
    });
}

function placeAndWaterfall(data) {
    var $nodeList = getNodes(data);
    var defers = [];
    $nodeList.find('img').each(function () {
        var _this = this;

        var defer = new Promise(function (resolve) {
            (0, _jquery2.default)(_this).on('load', function () {
                resolve();
            });
        });
        defers.push(defer);
    });
    Promise.all(defers).then(function () {
        $newsCt.append($nodeList);
        waterfallObj.push($nodeList);
        curPage++;
        isLoading = false;
    }).catch(function () {
        console.log('加载图片失败');
        curPage++;
        isLoading = false;
    });
}

function getNodes(data) {
    var html = '';
    data.forEach(function (item) {
        html += '<li class="' + _getAndWaterNewsModule2.default.item + '">';
        html += '<a class="' + _getAndWaterNewsModule2.default['img-ct'] + '" href="' + item.url + '">';
        html += '<img src="' + item.img_url + '">';
        html += '</a>';
        html += '<h4><a href="' + item.url + '">' + item.short_name + '</a></h4>';
        html += '<p class="' + _getAndWaterNewsModule2.default.brief + '">' + item.short_intro + '</p></li>';
    });
    return (0, _jquery2.default)(html);
}
exports.default = checkNews;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Waterfull = function () {
    function Waterfull($nodes) {
        _classCallCheck(this, Waterfull);

        this.$nodes = $nodes;
        this.$parentnode = $nodes.parent();
        this.init();
        this.push($nodes);
    }

    _createClass(Waterfull, [{
        key: 'init',
        value: function init() {
            this.colWidth = this.$nodes.outerWidth(true);
            this.parentwidth = this.$parentnode.width();
            this.colCount = Math.floor(this.parentwidth / this.colWidth);
            this.colHeight = new Array(3).fill(0);
        }
    }, {
        key: 'push',
        value: function push($nodes) {
            var _this = this;

            $nodes.each(function (i, node) {
                var minHeight = Math.min.apply(Math, _toConsumableArray(_this.colHeight)),
                    idx = _this.colHeight.indexOf(minHeight);
                (0, _jquery2.default)(node).css({
                    top: minHeight,
                    left: _this.parentwidth / _this.colCount * (0.5 + idx) - _this.colWidth / 2
                });
                _this.colHeight[idx] += (0, _jquery2.default)(node).outerHeight(true);
                _this.$parentnode.height(Math.max.apply(Math, _toConsumableArray(_this.colHeight)));
            });
        }
    }]);

    return Waterfull;
}();

exports.default = Waterfull;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"item":"_2HSgCWUwdPC-69vcMzVFgo","img-ct":"_1YzOQIPuhf7C10t8B5Qmny","brief":"WpEDrTk5ZJbTZbeFSa3aC"};

/***/ })
],[1]);
//# sourceMappingURL=main.js.map