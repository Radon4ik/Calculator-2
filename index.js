let first_num = 'Enter the first digit';
let second_num = 'Enter the second digit';


const firstQuestion = parseInt(prompt(first_num, ''));
const secondQuestion = parseInt(prompt(second_num, ''));
const result = firstQuestion + secondQuestion;

console.log(result);

alert(`${firstQuestion} + ${secondQuestion} = ${result}`);