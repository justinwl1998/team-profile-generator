const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

class Builder {
    constructor() {
        this.employeeList = [];
    }

    start() {
        this.addManager();
    }

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
                // Add the manager
                this.employeeList.push(new Manager(data.name, data.id, data.email, data.officeNum));
                // console.log(this.employeeList);
                // console.log(this.employeeList[0].constructor.name)

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

    //Builds the HTML, should probably use another file
    exit() {
        console.log(this.employeeList);
        //Todo: build the actual html
        process.exit(0);
    }
}

module.exports = Builder;