const Manager = require('../lib/Manager');

describe('Manager Inherited Properties and Methods', () => {
    describe('getName', () => {
        it('should return the defined name', () => {
            const name = "Alice";

            const mgmt = new Manager("Alice", 0, "", 101);

            expect(mgmt.getName()).toEqual(name);
        })
    })
    describe('getId', () => {
        it('should return the defined Id', () => {
            const id = 1234;

            const mgmt = new Manager("", 1234, "", 101);

            expect(mgmt.getId()).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('should return the defined Email', () => {
            const email = "test@email.com";

            const mgmt = new Manager("", 0, "test@email.com", 101);

            expect(mgmt.getEmail()).toEqual(email);
        })
    })
})
describe('Manager Properties and Getters', () => {
    describe('getOfficeNumber', () => {
        it('should return the defined office number', () => {
            const num = 555;

            const mgmt = new Manager("Bob", 1234, "bob@email.com", 555);

            expect(mgmt.getOfficeNumber()).toEqual(num);
        })
    })
    describe('getRole', () => {
        it('should return "Manager"', () => {
            const mgmt = new Manager("Bob", 1234, "bob@email.com", 555);

            expect(mgmt.getRole()).toEqual("Manager");
        })
    })
})
describe('Passing invalid parameters', () => {
    it('should return an empty object when passing an invalid office number', () => {
        const mgmt = new Manager("Bob", 1234, "bob@email.com", "888");

        expect(mgmt).toEqual({});
    })
})