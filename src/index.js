/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.splice(0, 0, 0);
  let  counter = 0;
  for (let i = 1; i < preferences.length; i++) {
    let a = preferences[i];
    if (preferences[a] !== i) {
      let b = preferences[a];
      if (preferences[b] !== a) {
        let c = preferences[b];
        if (preferences[c] !== b && c == i) {
          counter++;
        }
      }
    }
  }
  return(counter/3);
}
