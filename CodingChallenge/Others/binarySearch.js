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
    mid = Math.floor((end - start) / 2 + start)
    if (arr[mid] === mid + 2) {
      if (arr[mid - 1] === mid || mid === 0) return mid + 1 // index + 1
      end = mid
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
