module.exports = function createDreamTeam(given) {
  if (!Array.isArray(given)){
    return false;
 }

 let result = [];

 for(let i = 0; i < given.length; i++){
   if(typeof given[i] == 'string'){
     result.push(given[i].replace(/\s/g, '')[0].toUpperCase());
   }
 }
 return [...result].sort().join('')
};