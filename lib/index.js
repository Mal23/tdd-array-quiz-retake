const input = [1, 3, 5, 7, 2];

function numberMuncher() {
  let newArr = [];
  input.filter(arr => {
    if(arr < 5) {
      newArr.push(arr);
    } else {
      return null;
    } 
  });
}

module.exports = numberMuncher;
