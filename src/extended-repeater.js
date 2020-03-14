module.exports = function repeater(str, options) {
    if(!options.separator){
      options.separator = '+';
    }
    if(!options.additionSeparator){
      options.additionSeparator = '|';
    }
    if(!options.additionRepeatTimes && options.repeatTimes){
      return (str + (options.separator + str).repeat(options.repeatTimes - 1));
    }
    if(!options.additionRepeatTimes && !options.repeatTimes){
      return (str + options.addition);
    }
    return (str+((options.addition+options.additionSeparator).repeat(options.additionRepeatTimes - 1))+options.addition)+(options.separator+(str+((options.addition+options.additionSeparator).repeat(options.additionRepeatTimes - 1))+options.addition)).repeat(options.repeatTimes - 1);
  };
  