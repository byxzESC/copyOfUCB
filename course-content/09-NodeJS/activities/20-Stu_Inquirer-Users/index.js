const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What languages do you know?',
        name: 'languages'
    },
    {
        type: 'input',
        message: 'What is your preferred method of communication?',
        name: 'preferences'
    },
]).then((answer) => {
    
    fs.appendFile('data.json', JSON.stringify(answer), (err) => {
        console.log(err)

    })
})

