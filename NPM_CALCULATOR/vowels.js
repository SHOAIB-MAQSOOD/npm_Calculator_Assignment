import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "string",
        type: "",
        message: "enter the alphabet"
    }]);
let vowels = ["a", "e", "i", "o", "u"];
if (vowels.includes(answer.string.toLowerCase())) {
    console.log(`${answer.string} is a vowel`);
}
else {
    console.log(`${answer.string} is not a vowel`);
}
