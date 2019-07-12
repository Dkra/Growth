const BallFactory = require("../Factory")

describe("Test BallFactory Class", () => {
    test("should pass type when use static createBall method", () => {
        const createBallWithoutType = () => BallFactory.createBall()
        expect(createBallWithoutType).toThrowError("Should match one of Ball type!")
    })

    test("create basketball", () => {
        let basketball = BallFactory.createBall('basketball')

        expect(basketball.type).toEqual('basketball')
        expect(basketball.price).toEqual(500)
    })

    test("create football", () => {
        let football = BallFactory.createBall('football')

        expect(football.type).toEqual('football')
        expect(football.price).toEqual(1000)
    })
})
