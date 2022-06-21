// const path = require('path');
// const sassTrue = require('sass-true');

// const sassFile = path.join(__dirname, 'test.scss');
// sassTrue.runSass({ file: sassFile }, { describe, it });


// scss.spec.js
const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

describe('Sass', () => {
    const testFiles = glob.sync('test/**/*.spec.scss');
    // Run on each file with describe() and it() functions
    testFiles.forEach((file) => sassTrue.runSass({ file: file }, { describe, it }));
});