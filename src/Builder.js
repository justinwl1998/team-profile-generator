const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const htmlOut = require('./generateOutput');
const fs = require('fs');

class Builder {
    constructor() {
        this.employeeList = [];
    }

    // The first thing done when the program is run is that it adds a manager, then allows for adding engineers and interns afterwards.
    start() {
        this.addEmployee("Manager");
    }

    // Add an engineer, intern or exit the program.
    standby() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Would you like to add another employee?",
                    choices: ["Engineer", "Intern", "Exit"],
                    name: "choice"
                }
            ])
            .then(val => {
                if (val.choice !== "Exit") {
                    this.addEmployee(val.choice);
                }
                else {
                    this.exit();
                }
            })
    }

    addEmployee(type) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: `Input the name of the ${type.toLowerCase()}.`,
                    name: "name"
                },
                {
                    type: "number",
                    message: `Input the ${type.toLowerCase()}'s ID.`,
                    name: "id"
                },
                {
                    type: "input",
                    message: `Input the ${type.toLowerCase()}'s E-mail address.`,
                    name: "email"
                },
                {
                    type: "number",
                    message: "Input the office number of the manager.",
                    name: "officeNum",
                    when(data) { return type === "Manager" }
                },
                {
                    type: "input",
                    message: "Input the engineer's Github username.",
                    name: "github",
                    when(data) { return type === "Engineer"}

                },
                {
                    type: "input",
                    message: "Input the intern's school.",
                    name: "school",
                    when(data) { return type === "Intern"}
                }
            ]).then(data => {
                let newEmploy;
                switch (type) {
                    case "Manager":
                        newEmploy = new Manager(data.name, data.id, data.email, data.officeNum);
                        break;
                    case "Engineer":
                        newEmploy = new Engineer(data.name, data.id, data.email, data.github);
                        break;
                    case "Intern":
                        newEmploy = new Intern(data.name, data.id, data.email, data.school);
                        break;
                }
                this.employeeList.push(newEmploy);
                this.standby();
            })
    }

    //Builds the HTML
    exit() {
        const rawHtml = htmlOut.generateOutput(this.employeeList);

        fs.writeFile('./dist/output.html', rawHtml, (err) => {
            err ? console.error(err) : console.log("Output successfully written")
        });
    }
}

module.exports = Builder;