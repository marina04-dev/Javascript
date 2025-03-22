/* Constructing A new Type of Error */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "validationError";
  }
}

function processInteger(input) {
  if (!Number.isInteger(input)) {
    throw new TypeError("Number must be an integer!");
  }
  else if (input<0) {
    throw new RangeError("Number must be >= 0");
  }
  else if (input>50) {
    throw new RangeError("Number must be <= 50");
  }
  console.log("I am doing something with the input: " + input);
}

let input = ["10", 1.5, 60, 33];

for (let value of input) {
  try {
    processInteger(value);
  }
  catch (error) {
    console.log(error);
  }
}
