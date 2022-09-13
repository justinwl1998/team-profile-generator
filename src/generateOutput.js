
function generateOutput(data) {
    let html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
        <header class="bg-danger">
            <h1 class="text-center text-white align-self-center">My Team</h1>
        </header>

        <div class="container">
            <div class="row">`;

    for (let i = 0; i < data.length; i++) {
        // Make a new row of cards every third iteration
        if (i !== 0 && i % 3 === 0) {
        html += `
            </div>
            <div class="row">`
        }

        html += `
                <div class="card w-25 mx-1">
                    <div class="card-header bg-primary">
                    <h2 class="text-white">${data[i].getName()}</h2>
                    <h2 class="text-white">${data[i].getRole() === "Manager" ? `☕ Manager`
                    : data[i].getRole() === "Engineer" ? `👓 Engineer`
                    : data[i].getRole() === "Intern" ? `🎓 Intern` : `Employee`}</h2>
                    </div>
                    <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                        ${data[i].constructor.name === "Manager" ? `<li class="list-group-item">Office Number: ${data[i].getOfficeNumber()}</li>`
                    : data[i].constructor.name === "Engineer" ? `<li class="list-group-item">Github: <a href="https://github.com/${data[i].getGithub()}">${data[i].getGithub()}</a></li>`
                    : data[i].constructor.name === "Intern" ? `<li class="list-group-item">School: ${data[i].getSchool()}</li>`
                    : ``}
                        </ul>
                    </div>
                </div>
        `;
    }

    html += `
            </div>            

        </div>

    </body>
</html>`

    return html;
}

module.exports = {
    generateOutput
};