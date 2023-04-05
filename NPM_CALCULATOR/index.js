// #! /usr/bin/env node
import { Sum, division, multiply, Sub } from "./operation.js";
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
const welcome = async () => {
    console.log(figlet.textSync("calculator", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    }));
    const input = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: chalk.bgYellow("Enter your first number"),
        },
        {
            name: "num2",
            type: "number",
            message: chalk.bgGreen("Enter your second number"),
        },
        {
            name: "operation",
            type: "list",
            choices: ["Add", "subtraction", "multiply", "division"],
            message: chalk.bgBlue("Enter the required operator"),
        },
    ]);
    if (input.operation == "Add") {
        const result = Sum(input.num1, input.num2);
        console.log(chalk.green(`Sum of ${input.num1} & ${input.num2} = ${result}`));
    }
    else if (input.operation == "subtraction") {
        const result = Sub(input.num1, input.num2);
        console.log(chalk.green(`Subtraction of ${input.num1} & ${input.num2} = ${result}`));
    }
    else if (input.operation == "multiply") {
        const result = multiply(input.num1, input.num2);
        console.log(chalk.green(`Multiplication of ${input.num1} & ${input.num2} = ${result}`));
    }
    else if (input.operation == "division") {
        const result = division(input.num1, input.num2);
        console.log(chalk.green(`Division of ${input.num1} & ${input.num2} = ${result}`));
    }
    else
        console.log("Invalid character");
    async function startAgain() {
        const restartInput = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue? Press y or n",
            },
        ]);
        if (restartInput.restart.toLowerCase() === "y") {
            await welcome();
        }
    }
    await startAgain();
};
await welcome();
