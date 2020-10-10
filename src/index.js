// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix){
    return [];
  } else
  return matrix.flatMap((el, index) => index % 2 === 0 ? el : el.reverse());;
}