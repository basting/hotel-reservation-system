# Proof-of-Concept for a Hotel Reservation System

ENG will create a search and master/detail page with CRUD features.

## Requirements and current status

- [x] Engineering MUST use Visual Studio Code with React V18 and its React Material for GUI
    - [x] React V18
    - [x] React Material for GUI

- [x] It needs to use ts and tsx.

- [x] Engineering needs to create a search page with search criteria and a result table. (check reservation.json for required data (2 entries))
    - [x] Create a search page with search criteria
    - [x] Create a search result table
    - [x] Wire up all components and populate with data

- [x] Engineering needs to create a popup dialog (modal dialog) to display the detail reservation (check GUI.png for UI sketch)
    - [x] Create a popup modal dialog to display reservation detail
    - [x] Update UI components to the needed types

- [x] Engineering MUST use the Function Component approach and use hook / State / Context to load 2 entries from reservation.json into memory and manage search logic.

- [x] Engineering MUST create relevant component objects to display search criteria, search results, and detail reservations by double-clicking the search result.

- [ ] Engineering MUST enhance add/modify/delete functions to provide CRUD for reservation. Please provide some basic form validation for add/modification.  If you choose 3rd lib, please explain the reason.
    - [x] Provide all CRUD functions
    - [ ] Add basic form validation

- [x] Engineering MUST use an observable/subscription in the useEffect hook to add a new reservation to the in-memory cache, so the user can query that newly added reservation on the fly.

- [x] Engineering MUST apply the standard React coding style guide throughout the implementation. For example, import order, CamelCase, PascalCase

- [x] Engineering MUST create JEST unit test for each component object. We expect at least 80% code coverage.
    - [x] Create JEST unit test cases
    - [ ] Achieve 80% code coverage

- [x] Engineering MUST use ESLint to find and address all Lint-related issues.

- [ ] Engineering MUST use playwright to do an e2e automation test.

- [ ] Engineering MUST use GitHub to store the project and use a GitHub CI/CD pipeline to build, run unit tests, run ESLint, and execute the e2e.
    - [ ] Use Github CI/CD pipeline
        - [x] To build
        - [x] Run unit tests
        - [x] Run ESLint
        - [ ] Execute the e2e


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
