/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

let find_least_common_number = function(a, b, c) {
  let p1 = 0
  let p2 = 0
  let p3 = 0
  let min
  while (p1 < a.length && p2 < b.length && p3 < c.length) {
    if (a[p1] === b[p2] && b[p2] === c[p3]) return a[p1]

    min = Math.min(a[p1], b[p2], c[p3])

    if (min === a[p1]) p1++
    else if (min === b[p2]) p2++
    else p3++
  }

  return -1
}

const practice1 = (a1, a2, a3) => {
  let p1 = 0
  let p2 = 0
  let p3 = 0

  while (p1 < a1.length && p2 < a2.length && p3 < a3.length) {
    if (a1[p1] === a2[p2] && a2[p2] === a3[p3]) return a1[p1]

    if (a1[p1] < a2[p2] || a1[p1] < a3[p3]) p1++
    if (a2[p2] < a1[p1] || a2[p2] < a3[p3]) p2++
    if (a3[p3] < a1[p1] || a3[p3] < a2[p2]) p3++
  }

  return -1
}

export default [find_least_common_number, practice1]
