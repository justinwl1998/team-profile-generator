const Manager = require('../lib/Manager');

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