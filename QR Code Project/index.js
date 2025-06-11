// 1. Using the inquirer npm package to get user input.
import inquirer from "inquirer";

inquirer
    .prompt([{
        "message": "Type in your URL here:",
        "name": "URL"

    }])
    .then((answers) => {
        const url = answers.URL;
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

// 2. Using the qr-image npm package to turn the user entered URL into a QR code image.


// 3. Creating a txt file to save the user input using the native fs node module.
