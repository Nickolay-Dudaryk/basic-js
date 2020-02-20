module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {},
  turns = (2 ** disksNumber) - 1,
  seconds = turns / (turnsSpeed / 3600);

  result['turns'] = turns;
  result['seconds'] = seconds;

  return result
}


