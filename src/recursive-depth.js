module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let depth = 0,
        count = 1;

    for(let i of arr){
      if(Array.isArray(i)){
        count = this.calculateDepth(i);
          if(depth < count){
            depth = count;
          }
      }
    }
    return depth + 1;
  }
};