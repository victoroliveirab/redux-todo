
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Roadmap  

### Add Redux

After bootstrapping a React App, run `yarn add redux react-redux redux-logger` to add redux to `package.json`.

>**Note**: `npm` can be used in replacement of `yarn`. Yarn is just my preference.

### Create Folders

Inside the `src` folder, create a `components` and `redux` folders. `components` will hold all the components we create for the app, while `redux` will contain the store, the reducer(s) and the actions.

### Understand Concepts
#### Store
The store **stores** all the application's state. It is also where we apply **middlewares**. Middleware is a piece of code that sits between the action dispatched and the reducer (more on that below). There are a lot of middleware created by other developers that can be easily integrated in our applications. I'm using [redux logger](https://github.com/LogRocket/redux-logger) here, which logs the previous state, the action dispatched, and the updated state.

#### Reducer
Reducers are pure javascript functions responsible for "updating" the state of the app. Updating is between quotes because one of [redux three principles](https://redux.js.org/introduction/three-principles) states the following:
> State is read-only.

An app usually have multiples reducers, according to the different components it contains. A common pattern is to create a rootReducer (or mainReducer) to combine them all.

#### Action
An action is something that can be performed in order to "change" the current state of the app (or part of it). It is usually defined as a function that returns an object containing a type - an identifier to the reducer - and a payload - which can be thought as a parameter passed to the action function.

### Populate Redux Folder
The `store.js` and the `mainReducer.js` are placed at the root because they can be thought as global to the whole application. For each different component that we want to share state across other components, we create a folder with `[component-name].reducer.js` and `[component-name].actions.js`
