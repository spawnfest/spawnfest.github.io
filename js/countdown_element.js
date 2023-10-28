var Countdown = new Countdown({
  year     : 2023,
  month    : 10,
  day      : 30,
  hour     : 0,
  minute   : 1,
  second   : 0,
  timezone : 0,
  rangeHi  : "day",
  target   : "countdown",
  interval : 1000,
  width    : 450,
  height   : 100,
  hideLine : 1,
  numbers  : {
    font  : "Arial",
    color : "#FFFFFF",
    bkgd  : "#ff4500",
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
    color  : "#FFFFFF",
    weight : "normal"
  }
});
