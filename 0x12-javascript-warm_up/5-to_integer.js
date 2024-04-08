const [, , arg] = process.argv;

const parsedNumber = parseInt(arg);

if (!isNaN(parsedNumber)) {
  console.log(`My number: ${parsedNumber}`);
} else {
  console.log("Not a number");
}
