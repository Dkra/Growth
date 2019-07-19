// Interface
class ICoffee {
    getPrice() { }
    getMaterial() { }
}

// Concrete Component
class BaseCoffee {
    constructor() {
        this.price = 10
        this.material = 'BaseCoffee'
    }

    getPrice() {
        return this.price
    }

    getMaterial() {
        return this.material
    }
}

// Abstract Decorator Class
class CoffeeMaterialDecorator {
    constructor(component, material) {
        this.component = component
        this.material = material
    }

    getPrice() {
        return this.component.getPrice() + this.materialPrice
    }

    getMaterial() {
        return `${this.component.getMaterial()}, ${this.material}`
    }
}

// Concrete Decorator: Milk
class MilkDecorator extends CoffeeMaterialDecorator {
    constructor(component) {
        // use parent class constructor
        super(component, 'Milk')
    }

    addMilk() {
        this.materialPrice = 7
        console.log(`${this.material} price ${this.materialPrice} added!`)
    }

    getPrice() {
        this.addMilk()
        return super.getPrice()
    }

    getMaterial() {
        this.addMilk()
        return super.getMaterial()
    }
}

class WaterDecorator extends CoffeeMaterialDecorator {
    constructor(component) {
        super(component, 'Water')
    }

    addWater() {
        this.materialPrice = 1
        console.log(`${this.material} price ${this.materialPrice} added!`)
    }

    getPrice() {
        this.addWater()
        return super.getPrice()
    }

    getMaterial() {
        console.log('Water Added!')
        return super.getMaterial()
    }
}

module.exports = {
    BaseCoffee,
    MilkDecorator,
    WaterDecorator
}