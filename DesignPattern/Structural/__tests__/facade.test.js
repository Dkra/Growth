const InvestManager = require("../Facade")

describe("Test Facade Pattern Behavior", () => {
    let managerName, investerManager

    beforeEach(() => {
        managerName = '[Berkshire] Roger'
        investerManager = new InvestManager(managerName)
    })

    it('Should buy TSMC 1000 share, one time for customer', () => {
        const buyFuncMock = jest.spyOn(investerManager.twStockMarket, "buyTSMC")
        investerManager.investForCustomer()

        expect(buyFuncMock).toHaveBeenCalledTimes(1)
        expect(buyFuncMock).toHaveBeenCalledWith(1000)
    })

    it('Should buy Apple 1 share, one time for customer', () => {
        const buyFuncMock = jest.spyOn(investerManager.usStockMarket, "buyApple")
        investerManager.investForCustomer()

        expect(buyFuncMock).toHaveBeenCalledTimes(1)
        expect(buyFuncMock).toHaveBeenCalledWith(1)
    })

    it('Should buy Uber 5 share, one time for customer', () => {
        const buyFuncMock = jest.spyOn(investerManager.usStockMarket, "buyUber")
        investerManager.investForCustomer()

        expect(buyFuncMock).toHaveBeenCalledTimes(1)
        expect(buyFuncMock).toHaveBeenCalledWith(5)
    })

    it('Should buy Alibaba 1000 share, one time for customer', () => {
        const buyFuncMock = jest.spyOn(investerManager.cnStockMarket, "buyAlibaba")
        investerManager.investForCustomer()

        expect(buyFuncMock).toHaveBeenCalledTimes(1)
        expect(buyFuncMock).toHaveBeenCalledWith(1000)
    })
})
