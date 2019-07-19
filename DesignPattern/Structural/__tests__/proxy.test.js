const {
    PursuerRealSubject,
    MiddleFriendProxy
} = require("../Proxy")

describe("Test Proxy Pattern Behavior", () => {
    const pursuer = new PursuerRealSubject()
    const middleFriend = new MiddleFriendProxy(pursuer)

    test('middle friend sendFlower should return : send flower!', () => {
        expect(middleFriend.sendFlower()).toBe(pursuer.sendFlower())
    })

})
