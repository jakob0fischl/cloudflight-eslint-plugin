# `@cloudflight/eslint-plugin-typescript`

The Cloudflight ESLint Plugin Typescript provides a configuration of ESLint rules recommended by Cloudflight.

You can find the directory of all rules including their reasoning [here](src/configs/recommended-typescript/rules).

## Dependencies

The following dependencies are required:

```
"@rushstack/eslint-patch": "1.10.2",
"eslint": ">=8.0.0 <9.0.0"
```

## Usage

In your `package.json` add the following:

```
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-typescript": "<version>",
    ...
  }
```

Now open your `.eslintrc.js` and add the following:

```
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    ...
    extends: ['plugin:@cloudflight/typescript/recommended'],
    ...
};
```

When executing your next `eslint .` it will now validate your code against the cloudflight-recommended rules.

## Formatting

This package also includes configs for formatting typescript.

In your `package.json` add the following:

```
"devDependencies": {
    ...
    "@cloudflight/eslint-plugin-typescript": "<version>",
    ...
  }
```

Create a new file called `.eslintrc.format.js` and add the following:

```
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    plugins: ['@cloudflight/typescript'],
    extends: ['plugin:@cloudflight/typescript/formatting'],
    ignorePatterns: ['jest.config*.ts'],
    env: {
        es6: true,
        node: true,
    },
};
```

With the command `eslint . --config .eslintrc.format.js` your project can be checked for formatting violations.

### Pre-Commit Hook

The reason we created another eslint config file just for formatting instead of adding it to the existing one is to separate between linting and formatting, which are two different concerns. Furthermore, with the separation we also gain the ability to fix the formatting automatically before commit. Automatically fixing linting bugs with `eslint --fix` is not recommended, since it changes the intent of the code.

To automatically format your code before committing, set up [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) with the following content in your `package.json`.

```json
{
    // ...
    "lint-staged": {
        "*.ts": "eslint --config .eslintrc.format.cjs --fix"
    }
}
```
