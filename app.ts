#! /usr/bin/env node

// Money Changer 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red(`
 __   __  _______  __    _  _______  __   __                            
|  |_|  ||       ||  |  | ||       ||  | |  |                           
|       ||   _   ||   |_| ||    ___||  |_|  |                           
|       ||  | |  ||       ||   |___ |       |                           
|       ||  |_|  ||  _    ||    ___||_     _|                           
| ||_|| ||       || | |   ||   |___   |   |                             
|_|   |_||_______||_|  |__||_______|  |___|                             
 _______  __   __  _______  __   __  _______  __    _  _______  _______ 
|       ||  |_|  ||       ||  | |  ||   _   ||  |  | ||       ||       |
|    ___||       ||       ||  |_|  ||  |_|  ||   |_| ||    ___||    ___|
|   |___ |       ||       ||       ||       ||       ||   | __ |   |___ 
|    ___| |     | |      _||       ||       ||  _    ||   ||  ||    ___|
|   |___ |   _   ||     |_ |   _   ||   _   || | |   ||   |_| ||   |___ 
|_______||__| |__||_______||__| |__||__| |__||_|  |__||_______||_______|         
                                                             `));



let conversion = {
    "PKR": {
        "PKR": 1, 
        "USD": 0.0033,
        "GBP": 0.0026,
        "EUR": 0.0031,
    },
    "USD": {
        "PKR": 303.18, 
        "USD": 1,
        "GBP": 0.79,
        "EUR": 0.93,
    },
    "GBP": {
        "PKR": 381.43, 
        "USD": 1.26,
        "GBP": 1,
        "EUR": 1.17,
    },
    "EUR": {
        "PKR": 327.30, 
        "USD": 1.08,
        "GBP": 0.86,
        "EUR": 1,
    }
}


const answers:{

    from: "USD" | "PKR" | "EUR" | "GBP",
    to: "USD" | "PKR" | "EUR" | "GBP",
    amount: number,

} = await inquirer.prompt([
    {
        type: "rawlist",
        name: "from",
        choices: ["USD","PKR","EUR","GBP"],
        message: "which currency do you have?"
    },
    {
        type: "rawlist",
        name: "to",
        choices: ["USD","PKR","EUR","GBP"],
        message: "In which currency do you want to convert?"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter amount of money you need to convert?"
    }

]);

const {from, to, amount} = answers;

if (from && to && amount) {
    let returnCurrency = conversion[from][to] * amount; 
    if(to == "PKR"){
        console.log(chalk.rgb(26, 75, 188)(`Your currency from ${from} to ${to} is ${returnCurrency} rs`));
    } else if (to == "EUR"){
        console.log(chalk.rgb(26, 75, 188)(`Your currency from ${from} to ${to} is ${returnCurrency} €`));
    } else if (to == "USD"){
        console.log(chalk.rgb(26, 75, 188)(`Your currency from ${from} to ${to} is ${returnCurrency} $`));
    } else if (to == "GBP"){
        console.log(chalk.rgb(26, 75, 188)(`Your currency from ${from} to ${to} is ${returnCurrency} £`));
    } 
} else {
    console.log(chalk.redBright("Sorry, Invalid input"));
}