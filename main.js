#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000; //Dollor
let annountNo = 123456;
let pinCode = 1006;
let pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        message: "Enter your account no: ",
        type: "number"
    },
    {
        name: "q2",
        message: "Enter your pin: ",
        type: "number"
    }
]);
if (pinAnswer.q1 === annountNo && pinAnswer.q2 === pinCode) {
    let userName = "Zaeem Altaf";
    console.log(`Welcome ${userName}! Your current balance is $${balance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Options",
            type: "list",
            choices: ["withdraw", "Check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                message: "How much money do you want to withdraw?",
                type: "number"
            }
        ]);
        if (amount.amount > balance) {
            console.log("Insufficient balance");
        }
        else {
            console.log(`Successfully  withdraw $${amount.amount}.`);
            let remainingBalance = balance - amount.amount;
            console.log(`Your remaning balance is $${remainingBalance}.`);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your balance is $${balance}.`);
    }
}
else {
    console.log(`Wrong pincode or account number. Please try again.`);
}
