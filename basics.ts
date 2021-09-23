function add(num1: number, num2: number, printResult: boolean, phrase: string) {
  let result = num1 + num2;
  if (printResult) {
    console.log(`${phrase} ${result}`);
  } else {
    return result;
  }
}
const number1 = 7;
const number2 = 7;
const showResult = true;
const phraseString = "Result is ";

add(number1, number2, showResult, phraseString);
