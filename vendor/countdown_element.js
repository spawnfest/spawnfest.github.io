var Countdown = new Countdown({
  year     : 2018,
  month    : 11,
  day      : 24,
  hour     : 0,
  minute   : 0,
  second   : 0,
  timezone : 0,
  rangeHi  : "day",
  target   : "countdown",
  interval : 1000,
  width    : 300,
  height   : 70,
  hideLine : 1,
  numbers  : {
    font  : "Arial",
    color : "#FFFFFF",
    bkgd  : "#14316F",
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
