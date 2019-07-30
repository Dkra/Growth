// Abstract Class
class Questionnaire {
    constructor(name) {
        this.studentName = name
    }

    doTest() {
        return `
        ${this.doProblem1()}
        ${this.doProblem2()}
        ${this.doProblem3()}
        `
    }

    // overide in child class
    doProblem1(answer) {
        return `Problem1 ${this.studentName} choose ${answer}.`
    }

    doProblem2(answer) {
        return `Problem2 ${this.studentName} choose ${answer}.`
    }

    doProblem3(answer) {
        return `Problem3 ${this.studentName} choose ${answer}.`
    }
}

class JuniorStudent extends Questionnaire {
    constructor(name) {
        super(name)
    }

    doProblem1() { return super.doProblem1('A') }
    doProblem2() { return super.doProblem2('A') }
    doProblem3() { return super.doProblem3('A') }
}

class SeniorStudent extends Questionnaire {
    constructor(name) {
        super(name)
    }
    doProblem1() { return super.doProblem1('S') }
    doProblem2() { return super.doProblem2('S') }
    doProblem3() { return super.doProblem3('S') }
}

module.exports = {
    Questionnaire,
    JuniorStudent,
    SeniorStudent
}