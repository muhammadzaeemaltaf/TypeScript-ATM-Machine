#! /usr/bin/env node
import inquirer from "inquirer";
const balance = 10000; //Dollor
const pinCode = 1006;
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "Enter your pin: ",
        type: "number",
    },
]);
if (pinAnswer.q1 === pinCode) {
    let userName = "Zaeem Altaf";
    console.log(`\r\n Welcome ${userName}! Your current balance is $${balance} \r\n`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Options",
            type: "list",
            choices: [
                "Cash withdrawl",
                "Fast Cash",
                "Fund Transfer",
                "Check balance",
            ],
        },
    ]);
    if (operationAns.operation === "Cash withdrawl") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                message: "How much money do you want to withdrawl?",
                type: "number",
            },
        ]);
        if (amount.amount > balance) {
            console.log("Insufficient balance");
        }
        else {
            console.log(`Successfully  withdrawl $${amount.amount}.`);
            let remainingBalance = balance - amount.amount;
            console.log(`Your remaning balance is $${remainingBalance}.`);
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "cashAmount",
                type: "list",
                message: "How much money do you want to withdrawl?",
                choices: [2000, 4000, 8000],
            },
        ]);
        if (fastCash.cashAmount > balance) {
            console.log("Insufficient balance");
        }
        else {
            console.log(`Successfully  withdrawl $${fastCash.cashAmount}.`);
            let remainingBalance = balance - fastCash.cashAmount;
            console.log(`Your remaning balance is $${remainingBalance}.`);
        }
    }
    else if (operationAns.operation === "Fund Transfer") {
        let fund = await inquirer.prompt([
            {
                name: "fundAmount",
                type: "number",
                message: "How much money do you want to transfer?",
            },
        ]);
        if (fund.fundAmount > balance) {
            console.log("Insufficient balance");
        }
        else {
            console.log(`Successfully  transfer $${fund.fundAmount} to John Doe.`);
            let remainingBalance = balance - fund.fundAmount;
            console.log(`Your remaning balance is $${remainingBalance}.`);
        }
    }
    else {
        console.log(`Your current balance is $${balance}.`);
    }
}
else {
    console.log(`Wrong pincode or account number. Please try again.`);
}
