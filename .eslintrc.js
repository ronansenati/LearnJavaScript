module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
	/* changed comma-dangle default...ironically,
	we can't use a dangling comma here because
	this is a JSON file. */
	"comma-dangle": [
	2,
	"always-multiline"
	],
	"indent": [
	2,
	4
	],
	/* ... */
    }
};