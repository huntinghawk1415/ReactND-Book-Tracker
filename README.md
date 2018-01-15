#My Reads App

## To get started:

* be sure to have node.js installed on your computer
* verify you're in `/my-reads-app` and install all project dependencies with `npm install`
* start the development server with `npm start`
* optionally, run `npm run build; npm install -g serve; serve -s build` to start the production server

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Issues

In case anyone is feeling generously helpful, I've noticed something while developing this project. Whenever the page is refreshed, or the server starts for the first time, a '0' renders before the app re-renders. If the Udacity Reviewer or anyone viewing this project knows the reason, please don't hesitate to tell me, and hopefully I can update the project so that doesn't appear any longer. Thanks!

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository began with the starter code for _all_ Udacity students. Udacity, the owner, most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
