/* eslint-disable */
// https://leetcode.com/submissions/detail/229533784/

// sample 37100 kb submission
var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    // knows(a,b)
    // if true, that means 'b' could be a candidate for celebrity
    // if false, that means 'a' could be a candidate for celebrity

    let candidate = 0 // assume 0 is candidate

    // start the loop at 1, as we are setting the candidate to '0'
    for (let i = 1; i < n; i++) {
      if (knows(candidate, i)) {
        candidate = i
      }
    }
    // now we found a potential candidate from above loop
    // next we need to make sure that this candidate does not know anyone else
    // i.e. knows(candidate, xx) returns false for all n except the candidate itself
    for (let i = 0; i < n; i++) {
      if ((i !== candidate && knows(candidate, i)) || !knows(i, candidate)) {
        // i !== candidate => check if the person is not themselves
        // knows(candidate, i) => if true then candidate knows someone
        // !knows(i, candidate) => if true then there is someone who doesn't know the candidate
        return -1
      }
    }
    return candidate
  }
}
