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
    constructor(component, price, material) {
        this.component = component
        this.price = price
        this.material = material
    }

    getPrice() {
        return this.component.getPrice() + this.price
    }

    getMaterial() {
        return `${this.component.getMaterial()}, ${this.material}`
    }
}

// Concrete Decorator: Milk
class MilkDecorator extends CoffeeMaterialDecorator {
    constructor(component) {
        // use parent class constructor
        super(component, 7, 'Milk')
    }

    getPrice() {
        console.log('Milk Price: 7')
        return super.getPrice()
    }

    getMaterial() {
        console.log('Milk Added!')
        return super.getMaterial()

    }
}

class WaterDecorator extends CoffeeMaterialDecorator {
    constructor(component) {
        super(component, 1, 'Water')
    }

    getPrice() {
        console.log('Water Price: 1')
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