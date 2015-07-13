# React.js Testing Approaches - an overview

This repository aims to show and compare testing approaches you can have with testing React components:

* Testing the real markup rendered by React using `React.findDOMNode`
* Testing through test utilities (`find` / `scry` methods from `React.addons.TestUtils`)
* Testing with references and the real markup (an _improvement_ to simple testing with the real markup)
* Testing with `React.addons.TestUtils.Simulate`
* Testing using shallow rendering approach

It shows those testing techniques using three components:

* `Greeter` component - a simple box with a "Hello, X!" paragraph. (intent: it is a dead easy example to follow)
* `SpecialityOfTheHouse` component - a select box with three options to choose (intent: to show interaction with form inputs in tests)
* `InvitationList` component - a list of people invited for an event (intent: it is made of more than two components, so it can be shown what to test at the top-level and what not.)

## Installation:

You must have [io.js](https://iojs.org) or [node.js](https://nodejs.org) installed.

Then, follow these steps:

```
git clone git@github.com:arkency/react-testing-approaches.git
cd react-testing-approaches
npm install -g grunt # You may need a root access for this.
npm install
```

## Usage

To run tests, simply run:

```
grunt test
```

## React Kung Fu

We're preparing something big for you. Since we love teaching React.js, we decided to create a whole new initiative called React Kung Fu.

If you want to learn React in a simple way, seek no further. [Subscribe to our newsletter](http://arkency.us5.list-manage.com/subscribe?u=1bb42b52984bfa86e2ce35215&id=71db9e1b5a), [read our blog](http://reactkungfu.com) and stay tuned for exclusive learning materials and content.

## License

The project is licensed under the free MIT license. You can read more about it in the [LICENSE file](https://github.com/arkency/react_flux_alt_immutable_todolist/blob/master/LICENSE).

## About

<img src="http://arkency.com/images/arkency.png" alt="Arkency" width="20%" align="left" />

This repository is funded and maintained by Arkency. Check out our other [open-source projects](https://github.com/arkency).

You can also [hire us](http://arkency.com) or [read our blog](http://blog.arkency.com).

