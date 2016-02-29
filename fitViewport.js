'use strict';

// responsive fitVp
function fitViewport(options) {
  var made = !1;
  var pxWidth = options.minWidth;
  var elHeight;

  var makeFitVp = function(options) {
    this.el = options.el;
    this.percent = options.percent / 100;
    this.min = options.minHeight;
    this.max = options.maxHeight;
    this.setToMin = (typeof options.setToMin === 'undefined' || !options.setToMin) ? !1 : !0; // if true, it sets min-height
    this.adjustHeight();

    made = !0;
  }
  makeFitVp.prototype.adjustHeight = function() {
    var self = this;
    elHeight = (function elHeightFunc() {
      var winH = window.innerHeight;
      self.currH = (winH >= self.min && winH < self.max) ? winH * self.percent : (winH >= self.max) ? self.max * self.percent : self.min * self.percent;

      (self.setToMin) ? self.el.style.minHeight = self.currH + 'px' : self.el.style.height = self.currH + 'px';
      return elHeightFunc;
    })();

    window.addEventListener('resize',elHeight,!1);
  }

  var testWidth = (function testWidthFunc(pxWidth) {
    var w = window.innerWidth;

    if(w < pxWidth && made) {
      window.removeEventListener('resize',elHeight);
      options.el.style.height = '';
      made = !1;
    }

    if(w > pxWidth && !made) {
      new makeFitVp(options);
    }

    return testWidthFunc;
  })(pxWidth);

  window.addEventListener('resize',function() {
    testWidth(pxWidth);
  },!1);

};
