/**
 * https://leetcode.com/problems/summary-ranges/
 */

/**
 * Runtime: 56 ms, faster than 67.82% of JavaScript online submissions for Summary Ranges.
 * Memory Usage: 33.8 MB, less than 36.96% of JavaScript online submissions for Summary Ranges.
 */

/**
 * Approach: Two pointer with additional array
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let currSum = nums[0]
    let leftPtr = 0
    let summary = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            if (leftPtr === i) summary.push(`${nums[i]}`)
            else {
                summary.push(`${nums[leftPtr]}->${nums[i]}`)
            }
            leftPtr = i + 1
        }
    }
    return summary
};

module.exports = summaryRanges