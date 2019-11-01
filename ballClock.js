const ballClock = n => {
  if (n < 27 || n > 127) {
    throw new error("Number must be between 27 & 127");
  }
  let match = 0;
  let count = 0;

  let origArr = Array(n)
    .fill()
    .map((e, i) => i + 1);
  let ballQueue = [...origArr];
  let minutes = [];
  let fiveMin = [];
  let hours = [];

  const returnBalls = src => {
    let i = src.length - 1;
    while (i >= 0) {
      ballQueue.unshift(src[i]);
      src.splice(i, 1);
      i--;
    }
  };

  while (match < 1) {
    let i = ballQueue.length - 1;
    if (minutes.length < 4) {
      minutes.push(ballQueue[i]);
      ballQueue.splice(i, 1);
    } else if (fiveMin.length < 11) {
      fiveMin.push(ballQueue[i]);
      ballQueue.splice(i, 1);
      returnBalls(minutes);
    } else if (hours.length < 11) {
      hours.push(ballQueue[i]);
      ballQueue.splice(i, 1);
      returnBalls(minutes);
      returnBalls(fiveMin);
    } else if (hours.length >= 11) {
      returnBalls(minutes);
      returnBalls(fiveMin);
      returnBalls(hours);
      i = ballQueue.length - 1;
      ballQueue.unshift(ballQueue[i]);
      ballQueue.pop();
      count++;
      if (origArr.toString() == ballQueue.toString()) {
        match++;
      }
    }
  }
  return (
    "Days: " + count / 2 + "\n" + "Balls: " + n 
  );
};
console.log(ballClock(30));
