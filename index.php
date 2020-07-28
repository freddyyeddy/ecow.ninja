
<style>
  .countDown_cont {
    font-family: Lato, Arial, Gadget, sans-serif;
    font-size:  13px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #333;
  }

  .countDown_interval_cont {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    width: auto;
  }

  .countDown_interval_cont:nth-child(n+1):not(:last-child) {
    margin-right: 1em;
  }

  .countDown_interval_basic_cont {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .countDown_interval_basic_cont_description {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: .3em;
    margin-top: 0.3em;
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    text-shadow: 0.1em 0.1em 0.1em #000000;
  }

  .countDown_digit_cont {
    -webkit-perspective: 3.2em;
    perspective: 3.2em;
    box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.2);
    width: 1em;
    height: 1.6em;
    position: relative;
    line-height: 1.6em;
    font-size: 5em;
    font-weight: bold;
    border-radius: 0.08em;
  }

  .countDown_digit_cont:nth-child(n+1):not(:last-child) {
    margin-right: 0.05em;
  }

  .countDown_digit_last_placeholder,
  .countDown_digit_new_placeholder {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    text-align: center;
    overflow: hidden;
  }

  .countDown_digit_last_placeholder {
    bottom: 0;
    background: white;
    border-radius: 0 0 0.08em 0.08em;
  }

  .countDown_digit_last_placeholder_inner {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    bottom: 50%;
    position: absolute;
  }

  .countDown_digit_new_placeholder {
    top: 0;
    background: #f7f7f7;
    border-radius: 0.08em 0.08em 0 0;
  }

  .countDown_digit_last_rotate,
  .countDown_digit_new_rotate {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    font-weight: bold;
    position: absolute;
    top: 0;
    overflow: hidden;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    border-radius: 0.08em 0.08em 0 0;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .countDown_digit_last_rotate:after,
  .countDown_digit_new_rotate:after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-bottom: 0.01em solid rgba(0, 0, 0, 0.1);
  }

  .countDown_digit_last_rotate {
    -webkit-animation-name: countDown_flip_1;
    animation-name: countDown_flip_1;
    background: #f7f7f7;
  }

  .countDown_digit_new_rotate {
    -webkit-animation-name: countDown_flip_2;
    animation-name: countDown_flip_2;
    background: white;
  }

  .countDown_digit_new_rotated {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
    width: 100%;
    height: 100%;
  }

  .countDown_digit_new_rotated_inner {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    bottom: 50%;
    position: absolute;
  }

  @-webkit-keyframes countDown_flip_1 {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      z-index: 1;
    }

    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
      z-index: 0;
    }
  }

  @keyframes countDown_flip_1 {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      z-index: 1;
    }

    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
      z-index: 0;
    }
  }

  @-webkit-keyframes countDown_flip_2 {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      z-index: 0;
    }

    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
      z-index: 1;
    }
  }

  @keyframes countDown_flip_2 {
    0% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      z-index: 0;
    }

    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
      z-index: 1;
    }
  }
</style>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
<script type="text/javascript">
  var url_string = window.location.href
  var url = new URL(url_string);
  if (url.searchParams.get('p')) {
var c = url.searchParams.get("p").trim();
}else{
  var c = "https://ecowalaska.bpweb.bp.com/";
}
  // var c = url.searchParams.get("p").trim();
  var ecow = "https://ecowalaska.bpweb.bp.com/permitvision/editor/#/certificate/BP05-";
  ecow = ecow + encodeURIComponent(c) + "?openerRegistrationNumber=Permit";
  console.log(c);
  // window.location = ecow + encodeURIComponent(c) + "?openerRegistrationNumber=Permit";
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  function Countdown(opt) {
    "use strict";
    var options = {
        cont: null,
        endDate: {
          year: 0,
          month: 0,
          day: 0,
          hour: 0,
          minute: 0,
          second: 0
        },
        endCallback: null,
        outputFormat: 'year|week|day|hour|minute|second',
        outputTranslation: {
          year: 'Roky',
          week: 'Týdny',
          day: 'Dny',
          hour: 'Hodin',
          minute: 'Minut',
          second: 'Vteřin'
        }
      },
      lastTick = null,
      intervalsBySize = ['year', 'week', 'day', 'hour', 'minute', 'second'],
      TIMESTAMP_SECOND = 1000,
      TIMESTAMP_MINUTE = 60 * TIMESTAMP_SECOND,
      TIMESTAMP_HOUR = 60 * TIMESTAMP_MINUTE,
      TIMESTAMP_DAY = 24 * TIMESTAMP_HOUR,
      TIMESTAMP_WEEK = 7 * TIMESTAMP_DAY,
      TIMESTAMP_YEAR = 365 * TIMESTAMP_DAY,
      elementClassPrefix = 'countDown_',
      interval = null,
      digitConts = {};
    loadOptions(options, opt);

    function getDate(date) {
      if ((typeof date === 'undefined' ? 'undefined' : _typeof(date)) === 'object') {
        if (date instanceof Date) {
          return date;
        } else {
          var expectedValues = {
            day: 0,
            month: 0,
            year: 0,
            hour: 0,
            minute: 0,
            second: 0
          };
          for (var i in expectedValues) {
            if (expectedValues.hasOwnProperty(i) && date.hasOwnProperty(i)) {
              expectedValues[i] = date[i];
            }
          }
          return new Date(expectedValues.year, expectedValues.month > 0 ? expectedValues.month - 1 : expectedValues.month, expectedValues.day, expectedValues.hour, expectedValues.minute, expectedValues.second);
        }
      } else if (typeof date === 'number' || typeof date === 'string') {
        return new Date(date);
      } else {
        return new Date();
      }
    }

    function prepareTimeByOutputFormat(dateObj) {
      var usedIntervals = undefined,
        output = {},
        timeDiff = undefined;
      usedIntervals = intervalsBySize.filter(function(item) {
        return options.outputFormat.split('|').indexOf(item) !== -1;
      });
      timeDiff = dateObj.getTime() - Date.now();
      usedIntervals.forEach(function(item) {
        var value = undefined;
        if (timeDiff > 0) {
          switch (item) {
            case 'year':
              value = Math.trunc(timeDiff / TIMESTAMP_YEAR);
              timeDiff -= value * TIMESTAMP_YEAR;
              break;
            case 'week':
              value = Math.trunc(timeDiff / TIMESTAMP_WEEK);
              timeDiff -= value * TIMESTAMP_WEEK;
              break;
            case 'day':
              value = Math.trunc(timeDiff / TIMESTAMP_DAY);
              timeDiff -= value * TIMESTAMP_DAY;
              break;
            case 'hour':
              value = Math.trunc(timeDiff / TIMESTAMP_HOUR);
              timeDiff -= value * TIMESTAMP_HOUR;
              break;
            case 'minute':
              value = Math.trunc(timeDiff / TIMESTAMP_MINUTE);
              timeDiff -= value * TIMESTAMP_MINUTE;
              break;
            case 'second':
              value = Math.trunc(timeDiff / TIMESTAMP_SECOND);
              timeDiff -= value * TIMESTAMP_SECOND;
              break;
          }
        } else {
          value = '00';
        }
        output[item] = (('' + value).length < 2 ? '0' + value : '' + value).split('');
      });
      return output;
    }

    function fixCompatibility() {
      Math.trunc = Math.trunc || function(x) {
        if (isNaN(x)) {
          return NaN;
        }
        if (x > 0) {
          return Math.floor(x);
        }
        return Math.ceil(x);
      };
    }

    function writeData(data) {
      var code = '<div class="' + elementClassPrefix + 'cont">',
        intervalName = undefined;
      for (intervalName in data) {
        if (data.hasOwnProperty(intervalName)) {
          var element = '<div class="' + elementClassPrefix + '_interval_basic_cont">\n                                       <div class="' + getIntervalContCommonClassName() + ' ' + getIntervalContClassName(intervalName) + '">',
            intervalDescription = '<div class="' + elementClassPrefix + 'interval_basic_cont_description">\n                                                   ' + options.outputTranslation[intervalName] + '\n                                               </div>';
          data[intervalName].forEach(function(digit, index) {
            element += '<div class="' + getDigitContCommonClassName() + ' ' + getDigitContClassName(index) + '">\n                                        ' + getDigitElementString(digit, 0) + '\n                                    </div>';
          });
          code += element + '</div>' + intervalDescription + '</div>';
        }
      }
      options.cont.innerHTML = code + '</div>';
      lastTick = data;
    }

    function getDigitElementString(newDigit, lastDigit) {
      return '<div class="' + elementClassPrefix + 'digit_last_placeholder">\n                        <div class="' + elementClassPrefix + 'digit_last_placeholder_inner">\n                            ' + lastDigit + '\n                        </div>\n                    </div>\n                    <div class="' + elementClassPrefix + 'digit_new_placeholder">' + newDigit + '</div>\n                    <div class="' + elementClassPrefix + 'digit_last_rotate">' + lastDigit + '</div>\n                    <div class="' + elementClassPrefix + 'digit_new_rotate">\n                        <div class="' + elementClassPrefix + 'digit_new_rotated">\n                            <div class="' + elementClassPrefix + 'digit_new_rotated_inner">\n                                ' + newDigit + '\n                            </div>\n                        </div>\n                    </div>';
    }

    function updateView(data) {
      var _loop = function _loop(intervalName) {
        if (data.hasOwnProperty(intervalName)) {
          data[intervalName].forEach(function(digit, index) {
            if (lastTick !== null && lastTick[intervalName][index] !== data[intervalName][index]) {
              getDigitCont(intervalName, index).innerHTML = getDigitElementString(data[intervalName][index], lastTick[intervalName][index]);
            }
          });
        }
      };
      for (var intervalName in data) {
        _loop(intervalName);
      }
      lastTick = data;
    }

    function getDigitCont(intervalName, index) {
      if (!digitConts[intervalName + '_' + index]) {
        digitConts[intervalName + '_' + index] = document.querySelector('.' + getIntervalContClassName(intervalName) + ' .' + getDigitContClassName(index));
      }
      return digitConts[intervalName + '_' + index];
    }

    function getIntervalContClassName(intervalName) {
      return elementClassPrefix + 'interval_cont_' + intervalName;
    }

    function getIntervalContCommonClassName() {
      return elementClassPrefix + 'interval_cont';
    }

    function getDigitContClassName(index) {
      return elementClassPrefix + 'digit_cont_' + index;
    }

    function getDigitContCommonClassName() {
      return elementClassPrefix + 'digit_cont';
    }

    function loadOptions(_options, _opt) {
      for (var i in _options) {
        if (_options.hasOwnProperty(i) && _opt.hasOwnProperty(i)) {
          if (_options[i] !== null && _typeof(_options[i]) === 'object' && _typeof(_opt[i]) === 'object') {
            loadOptions(_options[i], _opt[i]);
          } else {
            _options[i] = _opt[i];
          }
        }
      }
    }

    function start() {
      var endDate = undefined,
        endDateData = undefined;
      fixCompatibility();
      endDate = getDate(options.endDate);
      endDateData = prepareTimeByOutputFormat(endDate);
      writeData(endDateData);
      lastTick = endDateData;
      if (endDate.getTime() <= Date.now()) {
        if (typeof options.endCallback === 'function') {
          options.endCallback();
        }
      } else {
        interval = setInterval(function() {
          updateView(prepareTimeByOutputFormat(endDate));
        }, TIMESTAMP_SECOND);
      }
    }

    function stop() {
      if (interval !== null) {
        clearInterval(interval);
      }
    }
    return {
      start: start,
      stop: stop
    };
  }
  window.onload = function() {


    var cd = new Countdown({
      cont: document.querySelector('.flipclit'),
      endDate: {
        year: 2020,
        month: 8,
        day: 01,
        hour: 0,
        minute: 0,
        second: 0,
      },
      outputTranslation: {
        year: 'Years',
        week: 'Weeks',
        day: 'Days',
        hour: 'Hours',
        minute: 'Minutes',
        second: 'Seconds',
      },
      endCallback: null,
      outputFormat: 'day|hour|minute|second',
    });
    cd.start();
  }
</script>
<div style="text-align: center; margin: 0 auto; width: 90vw;">
  <div style="position: relative; height: 7em;">
<div class="flipclit" style="    position: absolute;
    left: 50%;
    margin-left: -31%;"></div>
</div>
<div>
<h1><a class="permitlink" href="https://ecowalaska.bpweb.bp.com/">eCOWLink</a>.</h1>
<div style="font-size: 1.5em;">
 Sorry for the inconvenience. This site will be taken down if I do not get feedback that it is still in use and useful. This began as a tool to streamline the use of eVision across the field. I began adding more and more quality of life additions to it as the time went on I am more than happy to keep the tool up and add any improvements upon request. eCOW-Ninja is a central hazard and mitigation database with built in peer review. Before my exit from the slope and the Hillcorp hand off. I finished implementation of a Area Authority dashboard/back-end within the tool. My goal was to streamline and make the digital permitting process easier for everyone involved. I am no longer employed on slope and have no need to keep working on and paying for the upkeep of this tool. But if you use it and want it kept up or any additions/changes let me know. I will do my best to accommodate as my schedule allows. Its been nice working with you all.
<div style="    text-align: left;">
<br>-SB
<br><a href="mailto:freddyyeddy@pm.me">freddyyeddy@pm.me</a>
</div>
</div>
</div>
</div>
