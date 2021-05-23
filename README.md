# La Liga App

Project made by Jesus Vazquez Rosa.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation Guide

    After downloaded or cloned the proyect you need to run `yarn` on the 
    console to install all the dependencies

    Then you have to run `yarn start` and the web will run on port 3000.


## Dependencies

The package installed for this project can be found on `package.json` the most important libraries used to make the web are:

1. typescript: 4.1.2,
2. axios: 0.21.1,
3. react: 17.0.2,
4. react-dom: 17.0.2,
5. react-feather: 2.0.9,
6. react-google-login: 5.2.2,
7. react-redux: 7.2.4,
8. react-router-dom: 5.2.0,
9. react-scripts: 4.0.3,
10. redux: 4.1.0,
11. redux-form: 8.3.7,
12. redux-saga: 1.1.3,
13. styled-components: 5.3.0,
14. prettier: 2.3.0

The ones that were not required on the guide are:

2. axios: 0.21.1 => Used to make easier the calls to the api
5. react-feather: 2.0.9 => Icons Library
6. react-google-login => 5.2.2 => Easy way to implement a google login on react
11. redux-form: 8.3.7 => Can manage the state of every form in the app


All this libraries need to have installed their correponding types to work on typescript.

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn prettier --write .`

Runs the prettier to check for the code format.

### Pre-commit Hook

There is no need to run `yarn prettier --write .` on every commit due to the installation of a pre-commit hook
that runs the command.

It will also check for eslint problems.


