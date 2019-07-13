const performanceStrategy = {
  A(salary) {
    return salary * 1.1
  },
  B(salary) {
    return salary * 1.05
  },
  C(salary) {
    return salary * 1.03
  }
}

module.exports = performanceStrategy
