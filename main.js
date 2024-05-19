import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000; // Dollar
let myPin = 2345;
console.log(chalk.yellow("\n \tWelcome To ATM\n "));
//Question no:1 
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.blue("enter your pin"),
        type: "number",
    }
]);
//if/else coditional statement
//12345=== 2345 false
if (pinAnswer.pin === myPin) {
    console.log(chalk.red("\nCorrect Pin Code ,Logged In Successfully \n"));
    //Question no:2
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    //  console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let withdrawAnswer = await inquirer.prompt([
            {
                name: "withdrawmethod",
                message: "select withdrawal method",
                type: "list",
                choices: ["fast cash", "enter amount"],
            }
        ]);
        if (withdrawAnswer.withdrawmethod === "fast cash") {
            let fastCashAnswer = await inquirer.prompt([
                {
                    name: "fastCash",
                    message: "Select Amount",
                    type: "list",
                    choices: [1000, 2000, 5000, 10000, 15000, 20000, 30000]
                }
            ]);
            if (fastCashAnswer.fastCash > myBalance) {
                console.log("Insuficient balance");
            }
            // asignnment operators => =,-=,+=
            else {
                myBalance -= fastCashAnswer.fastCash;
                console.log(`${fastCashAnswer.fastCash} Withdraw Sucessfully`);
                console.log("Your remaining balance is:" + myBalance);
            }
        }
        else if (withdrawAnswer.withdrawmethod === "enter amount") {
            let amountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter amount you want to withdraw",
                    type: "number",
                }
            ]);
            if (amountAnswer.amount > myBalance) {
                console.log(chalk.red("\nInsuficient balance\n"));
            }
            // asignnment operators => =,-=,+=
            else if (myBalance -= amountAnswer.amount)
                console.log("Your remaining balance is:" + myBalance);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(chalk.yellow("Your balance is: " + myBalance));
    }
}
else {
    console.log(chalk.red("\nIncorrect Pin Number\n"));
}
