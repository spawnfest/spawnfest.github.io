var BigCountdown = new Countdown({
  year     : 2017,
  month    : 12,
  day      : 11,
  hour     : 0,
  minute   : 0,
  second   : 0,
  timezone : 0,
  rangeHi  : "hour",
  target   : "countdown",
  interval : 1000,
  width    : 500,
  height   : 100,
  hideLine : 1,
  numbers  : {
    font  : "Arial",
    color : "#FFFFFF",
    bkgd  : "#ff5e00",
    rounded : 0.15,
    shadow  : {
      x : 0,
      y : 3,
      s : 4,
      c : "#000000",
      a : 0.4
    }
  },
  labels: {
    color  : "#c1bbbb",
    weight : "normal"
  }
});

var SmallCountdown = new Countdown({
  year     : 2017,
  month    : 12,
  day      : 11,
  hour     : 0,
  minute   : 0,
  second   : 0,
  timezone : 0,
  rangeHi  : "hour",
  target   : "countdown-small",
  interval : 1000,
  width    : 350,
  height   : 100,
  hideLine : 1,
  numbers  : {
    font  : "Arial",
    color : "#FFFFFF",
    bkgd  : "#ff5e00",
    rounded : 0.15,
    shadow  : {
      x : 0,
      y : 3,
      s : 4,
      c : "#000000",
      a : 0.4
    }
  },
  labels: {
    color  : "#c1bbbb",
    weight : "normal"
  }
});
