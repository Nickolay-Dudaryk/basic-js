module.exports = function getSeason(given) {
    if (given == undefined){
       return ('Unable to determine the time of year!');
    }
    if (given && given instanceof Date && Object.getOwnPropertyNames(given).length == 0){
      let month = given.getMonth();
      if (month < 2 || month == 11){
        return ('winter');
      }
      else if (month < 5){
        return ('spring');
      }
      else if (month < 8){
        return ('summer');
      }
      else {
        return ('autumn');
      }
    }
    else{
      throw new Error();
    }
};
