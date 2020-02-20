const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(given) {
  if (typeof given !== "string" || given == "" || given > 15 || given < 1) {
    return false;
  }
  let regExp = /^[0-9]|\.$/;
  if (regExp.test(given) == false) {
    return false;
  }

  let givenNum = parseFloat(given),
    k = 0.693 / HALF_LIFE_PERIOD,
    t = Math.log(MODERN_ACTIVITY / givenNum) / k;

  return Math.ceil(t);
};
