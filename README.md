## To test this project simply run: 

### `npm start`

## For a production ready build run:

### `npm run build`

# Key notes:
For a small project like this there was no need for an external state managment library (think redux, mobx, etc). The react API and a well thought component structure is enough to manage the state and it's faster since we won't be loading extra dependencies. If we start seeing some prop drilling here and there, the Context API would provide a great solution since this app doesn't re render too often, keeping it simple.

The app was implemented with zero class components. This was a great chance to put the newly added hooks to test and you will find only functional components in the project. Besides the hype of using the latest features this is also a recomendation from the React team iteself (taken from https://reactjs.org/docs/hooks-intro.html):
> We recommend avoiding any “big rewrites”, especially for existing, complex class components. It takes a > bit of a mindshift to start “thinking in Hooks”. In our experience, it’s best to practice using Hooks 
> in new and non-critical components first, and ensure that everybody on your team feels comfortable with them

Extra comments were added on the code with comments that start with **DEV NOTE:**, feel free to search them for further insights.

* Many of the naming conventions and styles used were taken from [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).

* ESLint was used as linter (https://eslint.org/)

* Stylesheets use [BEM naming convention](http://getbem.com/).

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* Unit test and e2e test needed.

