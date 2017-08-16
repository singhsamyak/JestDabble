# JestDabble

Exploring Jest to test a sample React/Redux app.

#### Installation

```sh
$ cd jestDabble
$ npm install
```

To run webpack build along with Jest tests
```sh
$ npm run build
```

#### Jest Concepts

###### Snapshot Testing
 * Uses a test renderer (```react-test-render```) to generate a serializable value of the React tree
 * The first time the test runs, Jest creates a [snapshot](https://github.com/singhsamyak/JestDabble/blob/master/test/components/__snapshots__/Counter.test.js.snap) file
 * On subsequent test runs, Jest will compare the rendered output with the previous snapshot
    - If the snapshot does not match the rendered UI, an error is thrown and the diff is printed
    - If the snapshot needs to be updated, simply run `jest -u`
 * Read more about Snapshot Testing [here](https://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/)
 * Disadvantages:
    - Updating snapshots is too easy
    - Running `jest -u` to update snapshot will update all snapshots
    - If a single change causes many snapshots to break, it can be easy to accidentally update all of them
    - Possibly difficult to work through the whole diff to find changes
    - This is why it is highly recommended to review snapshot files during code review process
###### Mock Functions
 * Erases the actual implementation of a function
 * Captures calls to the function
 * Captures instances of constructor functions when instantiated with `new`
 * Allows test-time configuration of return values
 * Read more about Mock Functions [here](https://facebook.github.io/jest/docs/mock-functions.html)
