const Engineer = require('../lib/Engineer');

describe('Engineer Inherited Properties and Methods', () => {
    describe('getName', () => {
        it('should return the defined name', () => {
            const name = "Alice";

            const engi = new Engineer("Alice", 0, "", "alice.github.com");

            expect(engi.getName()).toEqual(name);
        })
        describe('getId', () => {
            it('should return the defined Id', () => {
                const id = 1234;

                const engi = new Engineer("", 1234, "", "");

                expect(engi.getId()).toEqual(id);
            })
        })
        describe('getEmail', () => {
            it('should return the defined Email', () => {
                const email = "test@email.com";

                const engi = new Engineer("", 0, "test@email.com", "");

                expect(engi.getEmail()).toEqual(email);
            })
        })
    })
})
describe('Engineer Properties and Getters', () => {
    describe('getGithub', () => {
        it('should return the defined github username', () => {
            const github = "testgithub";

            const engi = new Engineer("Carl", 0, "carl@email.com", "testgithub");

            expect(engi.getGithub()).toEqual(github);
        })
    })
    describe('getRole', () => {
        it('should return "Engineer"', () => {
            const engi = new Engineer("Carl", 0, "carl@email.com", "testgithub");

            expect(engi.getRole()).toEqual("Engineer");
        })
    })
})
describe('Passing invalid parameters', () => {
    it('should return an empty object when passing an invalid github username', () => {
        const engi = new Engineer("Carl", 0, "carl@email.com", 123456);

        expect(engi).toEqual({});
    })
})