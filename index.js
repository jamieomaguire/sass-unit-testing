const sass = require('sass');
const fs = require('fs')

const result = sass.compile("./src/test.scss");
console.log(result.css);

fs.writeFile('output.css', result.css, err => {
  if (err) {
    console.error(err)
    return
  }
});