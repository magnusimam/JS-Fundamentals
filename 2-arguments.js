const count = process.argv.length - 2;

if (count === 0) {
  console.log("0 argument");
} else if (count === 1) {
  console.log("1 argument");
} else {
  console.log(count + " arguments");
}
