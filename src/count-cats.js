module.exports = function countCats(given) {
  let count = 0;

  for(let i = 0; i < given.length; i++){
    for(let j = 0; j < given[i].length; j++){
      if(given[i][j] == '^^'){
        count++
    }
  }
}

return count;
};
