const day = process.argv[2];   // e.g., "3"
if (!day) {
  console.error("Please provide a day number: npm start -- <day>");
  process.exit(1);
}

const path = `./Day${day}/sol.js`;
console.log("Running:", path);
require(path);
