const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter any number: ", (numberOne) => {
  rl.question("Please enter another number: ", (numberTwo) => {
    rl.question("Please enter an operator (+ | - | * | /): ", (operator) => {
      let number1 = parseFloat(numberOne);
      let number2 = parseFloat(numberTwo);

      switch (operator) {
        case "+":
          result = number1 + number2;
          console.log(`${number1} + ${number2} = ${result}`);
          break;

        case "-":
          result = number1 - number2;
          console.log(`${number1} - ${number2} = ${result}`);
          break;

        case "*":
          result = number1 * number2;
          console.log(`${number1} * ${number2} = ${result}`);
          break;

        case "/":
          result = number1 / number2;
          console.log(`${number1} / ${number2} = ${result}`);
          break;

        default:
          console.log("Invalid operator");
          break;
      }

      rl.close();
    });
  });
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
