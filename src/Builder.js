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
                console.log(this.employeeList);
                console.log(this.employeeList[0].constructor.name)

                //Todo: add a standby function that asks to add an engineer, intern or exit the program
            })
    }

    addEngineer() {

    }

    addIntern() {

    }

    //Builds the HTML, should probably use another file
    exit() {

    }
}

module.exports = Builder;