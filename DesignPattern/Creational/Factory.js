class Basketball {
    constructor() {
        this.type = 'basketball'
        this.price = 500
    }
}

class Football {
    constructor() {
        this.type = 'football'
        this.price = 1000
    }
}

class BallFactory {
    static createBall(type) {
        switch (type) {
            case 'basketball':
                return new Basketball()
            case 'football':
                return new Football()
            default:
                throw new Error('Should match one of Ball type!')
        }
    }
}


module.exports = BallFactory