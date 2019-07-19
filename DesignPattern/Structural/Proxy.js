// Interface: ISubject
class ISubject {
    // Define Action
    sendFlower() { }
}

// Real Subject
class PursuerRealSubject {
    sendFlower() {
        return 'send flower!'
    }
}

// Proxy
class MiddleFriendProxy {
    constructor(realPursuer) {
        this.realPursuer = realPursuer
    }

    // help real pursuer send flower
    sendFlower() {
        return this.realPursuer.sendFlower()
    }
}

module.exports = {
    PursuerRealSubject,
    MiddleFriendProxy
}