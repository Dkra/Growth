const {
    Questionnaire,
    JuniorStudent,
    SeniorStudent
} = require('../TemplateMethod')

describe('Test Template Method Behavior', () => {
    let questionnaire = new Questionnaire()
    const juniorJames = new JuniorStudent('Jame')
    const seniorDurants = new SeniorStudent('Durants')

    it('Junior James should do the test and return string answer all with A', () => {
        const expectedAnsString = `
        Problem1 Jame choose A.
        Problem2 Jame choose A.
        Problem3 Jame choose A.
        `
        expect(juniorJames.doTest()).toEqual(expectedAnsString)
    })

    it('Junior James should do problem 1 2 3 once respectively', () => {
        juniorJames.doProblem1 = jest.fn()
        juniorJames.doProblem2 = jest.fn()
        juniorJames.doProblem3 = jest.fn()

        juniorJames.doTest()
        expect(juniorJames.doProblem1.mock.calls.length).toBe(1);
        expect(juniorJames.doProblem2.mock.calls.length).toBe(1);
        expect(juniorJames.doProblem3.mock.calls.length).toBe(1);
    })


    it('Senior Durants should do the test and return string answer all with S', () => {
        const expectedAnsString = `
        Problem1 Durants choose S.
        Problem2 Durants choose S.
        Problem3 Durants choose S.
        `
        expect(seniorDurants.doTest()).toEqual(expectedAnsString)
    })

    it('Senior Durants should do problem 1 2 3 once respectively', () => {
        seniorDurants.doProblem1 = jest.fn()
        seniorDurants.doProblem2 = jest.fn()
        seniorDurants.doProblem3 = jest.fn()

        seniorDurants.doTest()
        expect(seniorDurants.doProblem1.mock.calls.length).toBe(1);
        expect(seniorDurants.doProblem2.mock.calls.length).toBe(1);
        expect(seniorDurants.doProblem3.mock.calls.length).toBe(1);
    })
});