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
                
                this.standby(); // this could be recursion, but it'll do for now
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
        console.log("NOT FINISHED YET!");
    }

    addIntern() {
        console.log("NOT FINISHED YET!");
    }

    //Builds the HTML, should probably use another file
    exit() {
        //Todo: build the actual html
        process.exit(0);
    }
}

module.exports = Builder;