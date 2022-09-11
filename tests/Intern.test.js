const Intern = require('../lib/Intern');

describe('Intern Inherited Properties and Methods', () => {
    describe('getName', () => {
        it('should return the defined name', () => {
            const name = "Alice";

            const int = new Intern("Alice", 0, "", "");

            expect(int.getName()).toEqual(name);
        })
        describe('getId', () => {
            it('should return the defined Id', () => {
                const id = 1234;

                const int = new Intern("", 1234, "", "");

                expect(int.getId()).toEqual(id);
            })
        })
        describe('getEmail', () => {
            it('should return the defined Email', () => {
                const email = "test@email.com";

                const int = new Intern("", 0, "test@email.com", "");

                expect(int.getEmail()).toEqual(email);
            })
        })
    })
})
describe('Intern Properties and Getters', () => {
    describe('getSchool', () => {
        it('should return the defined school name', () => {
            const school = "Test University";

            const int = new Intern("", 0, "", "Test University");

            expect(int.getSchool()).toEqual(school);
        })
    })
    describe('getRole', () => {
        it('should return "Intern"', () => {
            const int = new Intern("Diana", 0, "diana@email.com", "Test University");

            expect(int.getRole()).toEqual("Intern");
        })
    })
})
describe('Passing invalid parameters', () => {
    it('should return an empty object when passing an invalid school name', () => {
        const int = new Intern("Diana", 0, "diana@email.com", false);

        expect(int).toEqual({});
    })
})