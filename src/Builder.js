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
        this.addManager();
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
                // While this whole program could use only one inquirer call, using this implementation is easier to read, even if it has a lot of re-used code.
                switch(val.choice) {
                    case "Engineer":
                        this.addEngineer();
                        break;
                    case "Intern":
                        this.addIntern();
                        break;
                    case "Exit":
                        this.exit();
                        break;
                }
            })
    }

    addManager() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Input the name of the team manager.",
                    name: "name"
                },
                {
                    type: "number",
                    message: "Input the team manager's ID.",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Input the team manager's E-mail address.",
                    name: "email"
                },
                {
                    type: "number",
                    message: "Input the office number of the manager.",
                    name: "officeNum"
                }
            ])
            .then(data => {
                this.employeeList.push(new Manager(data.name, data.id, data.email, data.officeNum));

                this.standby();
            })
    }

    addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Input the name of the engineer.",
                    name: "name"
                },
                {
                    type: "number",
                    message: "Input the engineer's ID.",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Input the engineer's E-mail address.",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Input the engineer's Github username.",
                    name: "github"
                }
            ])
            .then(data => {
                this.employeeList.push(new Engineer(data.name, data.id, data.email, data.github));

                this.standby();
            })
    }

    addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Input the name of the intern.",
                    name: "name"
                },
                {
                    type: "number",
                    message: "Input the intern's ID.",
                    name: "id"
                },
                {
                    type: "input",
                    message: "Input the intern's E-mail address.",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Input the intern's school.",
                    name: "school"
                }                
            ])
            .then(data => {
                this.employeeList.push(new Intern(data.name, data.id, data.email, data.school));

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