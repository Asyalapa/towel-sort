
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = []
  if ((!matrix) || (matrix.length == 0)) { return res }
  res = matrix.reduce( (acc, item, index) => {
    (index % 2 == 0) ? ( acc += "," + item ) : ( acc += "," + item.reverse() )
    return acc
  })
  return res.split(",")
}