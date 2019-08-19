const genArrOneToTen = () => {
  const arr = [...Array(10).keys()].map(num => num + 1)
  return arr
}

const omitRandomNumber = arr => {
  const randIdx = Math.floor(arr.length * Math.random())
  const omitNumber = arr.splice(randIdx, 1)[0]
  return omitNumber
}

const omitedOneNumberFromArr = () => {
  const arr = genArrOneToTen()
  omitRandomNumber(arr)
  return arr
}

const findOmitedNum = arr => {
  let start = 0
  let end = arr.length - 1
  let mid
  while (start <= end) {
    /*
      What is diffent between <= and < ?
      when missing number (expected) value is 4
      start < end will stop at start=3, end=3 
      start <= end will execute start=3, end=3 so mid=3,
      because 3:2(index), 5:3(index) => return mid+1 which is 3+1=4
    */
    mid = Math.floor((end - start) / 2 + start)
    if (arr[mid] === mid + 2) {
      if (arr[mid - 1] === mid || mid === 0) return mid + 1
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return arr.length + 1
}

module.exports = {
  genArrOneToTen,
  omitRandomNumber,
  omitedOneNumberFromArr,
  findOmitedNum
}
