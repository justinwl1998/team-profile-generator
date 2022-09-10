class Employee {
    constructor(name, id, email) {
        if (typeof name !== 'string' || typeof id !== "number" || typeof email !== 'string') {
            return null;
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;