/*
  http://www.cnblogs.com/grandyang/p/4606700.html
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
  const restNumArr = nums.filter(num => num !== val)
  restNumArr.forEach((num, idx) => {
    nums[idx] = num
  })
  // return restNumArr.length
  return nums.slice(0, restNumArr.length) // for test
}

module.exports = removeElement
