import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "numberone",
        type: "number",
        message: "write the first Number",
    },
    {
        name: "numbertwo",
        type: "number",
        message: "write the second Number",
    },
    {
        name: "operator",
        type: "list",
        choices: ["+", "-", "x", "%"],
        message: "write the operator",
    },
]);
const { numberone, numbertwo, operator } = answer;
console.log(typeof numberone, typeof numbertwo, operator);
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    else if (operator === "x") {
        result = numberone * numbertwo;
    }
    else if (operator === "%") {
        result = numberone / numbertwo;
    }
    console.log(result);
}
else {
    console.log("enter valid input");
}
