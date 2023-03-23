const chalk = require('chalk');

// For success Message
const displayInfo = (message)=>{
    console.log(chalk.green.bgWhiteBright(message));
}

// For warning Message
const displayWarning = (message)=>{
    console.log(chalk.blue.bgYellowBright(message));
}

// For error Message
const displayError = (message)=>{
    console.log(chalk.red.bgWhiteBright(message));
}

module.exports = {
    displayInfo,
    displayWarning,
    displayError,
  };