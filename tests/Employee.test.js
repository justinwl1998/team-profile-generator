const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the defined name', () => {
            const name = "Alice";

            const emp = new Employee("Alice", 0, "");

            expect(emp.getName()).toEqual(name);
        })
    })

    describe('getId', () => {
        it('should return the defined Id', () => {
            const id = 1234;

            const emp = new Employee("", 1234, "");

            expect(emp.getId()).toEqual(id);
        })
    })

    describe('getEmail', () => {
        it('should return the defined Email', () => {
            const email = "test@email.com";

            const emp = new Employee("", 0, "test@email.com");

            expect(emp.getEmail()).toEqual(email);
        })
    })

    describe('getRole', () => {
        it('should return "Employee"', () => {
            const emp = new Employee("", 0, "");

            expect(emp.getRole()).toEqual("Employee");
        })
    })
}) 