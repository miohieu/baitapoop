export class Person {
    constructor(name, email, address, id) {

        this.name = name
        this.email = email
        this.address = address
        this.id = id

    }
}

export class Student extends Person {
    constructor(name, email, address, id, math, chemistry, physics) {
        super(name, email, address, id)
        this.math = math
        this.chemistry = chemistry
        this.physics = physics
    }

}
export class Employee extends Person {
    constructor(name, email, address, id, workDay, wage) {
        super(name, email, address, id)
        this.workDay = workDay
        this.wage = wage
    }

}
export class Customer extends Person {
    constructor(name, email, address, id, company, bill, rate) {
        super(name, email, address, id)
        this.comapy = company
        this.bill = bill
        this.rate = rate
    }
}


export class ListPerson {

}
