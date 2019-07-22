/*
    Client:
    
    const managerName = '[Berkshire] Roger'
    const investerManager = new InvestManager(managerName)
    investerManager.investForCustomer()
*/

class InvestManager {
    constructor(managerName = '[Berkshire] Roger') {
        this.usStockMarket = new UsStockMarket(managerName)
        this.twStockMarket = new TwStockMarket(managerName)
        this.cnStockMarket = new ChinaStockMarket(managerName)
    }

    investForCustomer() {
        this.usStockMarket.buyApple(1)
        this.usStockMarket.buyUber(5)
        this.twStockMarket.buyTSMC(1000)
        this.cnStockMarket.buyAlibaba(1000)
    }
}

class UsStockMarket {
    constructor(invester) { this.invester = invester }
    buyApple(shares) { console.log(`${this.invester} Buy US-APPL: ${shares}`) }
    buyUber(shares) { console.log(`${this.invester} Buy US-UBER: ${shares}`) }
}

class TwStockMarket {
    constructor(invester) { this.invester = invester }
    buyTSMC(shares) { console.log(`${this.invester} Buy TW-TSMC: ${shares}`) }
}

class ChinaStockMarket {
    constructor(invester) { this.invester = invester }
    buyAlibaba(shares) { console.log(`${this.invester} Buy CN-buyAlibaba: ${shares}`) }
}

module.exports = InvestManager