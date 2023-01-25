const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios
      .get(queryUrl)
      .then((data) => {
        let userName = data.data.map((user) => user.name)
        fs.writeFile('repos.txt', userName.join('\n'), function(err) {
          if (err) {
            console.log(err)
          } else {
            console.log('success')
          }
        })
      });
  });



