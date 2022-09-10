const Employee = require('../lib/Employee');

describe('Employee Properties and Getters', () => {
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

describe('Passing invalid parameters', () => {
    it('should return an empty object when passing an invalid name', () => {
        const emp = new Employee(123, 0, "");

        expect(emp).toEqual({});
    })

    it('should return an empty object when passing an invalid ID', () => {
        const emp = new Employee("Test", true, "Test");

        expect(emp).toEqual({});
    })
    
    it('should return an empty object when passing an invalid Email', () => {
        const emp = new Employee("", 0, {email: "this is a valid email, totally"})

        expect(emp).toEqual({});
    })
})