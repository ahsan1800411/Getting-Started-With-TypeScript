// type-Alias
type CombineAble = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: CombineAble,
  input2: CombineAble,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const result = combine("Ahsan", "Mumtaz", "as-text");
console.log(result);

const result2 = combine(4, 6, "as-number");
console.log(result2);
