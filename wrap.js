function wrap(string, colNum) {
  if (colNum < 1 || string === null)
    throw Error('Cannot wrap a lenght less than 1');

  // if (string.length < colNum) {
  //   return string;
  // } else {
  //   let strArray = string.split('');
  //   strArray.splice(colNum, 0, '\n');
  //   return strArray.join('');
  // }
  let result = [],
    count = colNum,
    startIdx = 0;

  while (count < string.length) {
    result.push(string.slice(startIdx, count));
    startIdx = count;
    count += colNum;
  }

  result.push(string.slice(startIdx));
  return result.join('\n');
}
module.exports = wrap;
