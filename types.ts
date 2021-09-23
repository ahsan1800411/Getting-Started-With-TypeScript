let userInput: unknown;
let userName: string;

userInput = 6;
if (typeof userInput === "string") {
  userName = userInput;
}

function genearteError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

const result = genearteError("Error Occured", 400);
console.log(result);
