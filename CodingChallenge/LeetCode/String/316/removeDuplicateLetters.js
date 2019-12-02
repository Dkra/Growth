/**
 * https://leetcode.com/problems/remove-duplicate-letters/
 */

/**
 * Runtime:
 * Memory Usage:
 */

/**
 * Approach 2: Greedy - Solving with Stack (Leetcode site)
 * We will keep a stack to store the solution we have built as we iterate over the string, and we will delete characters off the stack whenever it is possible and it makes our string smalle
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const countMap = {}
  const stack = []
  const isAppear = {}
  let curr

  for (let i = 0; i < s.length; i++) {
    curr = s[i]
    countMap[curr] = (countMap[curr] || 0) + 1
    isAppear[curr] = false
  }

  for (let j = 0, curr = s[j]; j < s.length; j++) {
    let stackTop = stack[stack.length - 1]
    curr = s[j]
    countMap[curr]--
    if (isAppear[curr] === true) continue

    // Remove while
    // z > a  (stackTop > curr)
    // and stackTop char exist afterwards (countMap[stackTop] > 0)
    while (stack.length > 0 && stackTop > curr && countMap[stackTop] > 0) {
      isAppear[stack.pop()] = false
      stackTop = stack[stack.length - 1]
    }

    isAppear[curr] = true
    stack.push(curr)
  }

  return stack.join('')
}

export default removeDuplicateLetters
