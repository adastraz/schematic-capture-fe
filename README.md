[![Netlify Status](https://api.netlify.com/api/v1/badges/97a78318-7c36-40d8-9c24-25137e79df06/deploy-status)](https://app.netlify.com/sites/schematic/deploys)&nbsp;
[![Maintainability](https://api.codeclimate.com/v1/badges/7780265919ee2de9ea46/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/schematic-capture-fe/maintainability) &nbsp;
[![Test Coverage](https://api.codeclimate.com/v1/badges/7780265919ee2de9ea46/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/schematic-capture-fe/test_coverage) &nbsp;
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Schematic Capture

Current version: 0.3. This app is in Alpha phase of the release life cycle for iOS and web.

**Production:** [www.schematiccapture.com](https://www.schematiccapture.com) in current state, does not seem to want to render new code?

**Staging:** [staging.schematiccapture.com](https://staging.schematiccapture.com) not currently in use - check AWS!

# Contributors

## Labs 20 - First Product Cycle

### Team Lead

- **Jason Belgard** – [Github](https://github.com/jbelgard)

### UX

- **Brian Hamilton** – [LinkedIn](https://github.com/BHamilton781)

### iOS

- **Gi Pyo John Kim** – [Github](https://github.com/GiPyoK)

### Full-Stack Web Developers

- **Christopher Johnson** - [Github](https://github.com/chrismjohnston)

- **Raajn Patel** - [Github](https://github.com/raajnpatel)

- **Nattajohn Rojanasupya** - [Github](https://github.com/nattroj)

- **Brad Zickafoose** - [Github](https://github.com/bradzickafoose)




## Labs 22 - Second Product Cycle

### Team Lead

- **Mark French** – [Github](https://github.com/juarezfrench)

### UX

- **Sarina Van Der Waag** 

### iOS

- **Troy Christian** – [Github](https://github.com/TroyChristian)

### Full-Stack Web Developers

- **Tyler Thompson** - [Github](https://github.com/adastraz)

- **Vincent Sanders** - [Github](https://github.com/vincesanders)

- **Ashton Ragan** - [Github](https://github.com/AshtonRagan)

- **Danielle Blackwell** - [Github](https://github.com/BleuxGenius)

- **Adam Winzenburger** - [Github](https://github.com/adamwinzdesign)

# Project Overview Labs 20

[Trello Board](https://trello.com/b/Amx4wIKW/labs-20-schematic-capture) | [Product Canvas](https://www.notion.so/Schematic-Capture-d4594ebf93ff4c6aba7942aea0546fea) | [UX Design files](https://www.notion.so/Schematic-Capture-d4594ebf93ff4c6aba7942aea0546fea#b59c986612b64c98badcfca0169aaeef)

# Project Overview Labs 22
[Trello Board](https://trello.com/b/Z6tCs69r/labs-22-schematic-capture) | [Product Canvas](https://www.notion.so/150f546ce39b4698b69bb96291a56b36?v=1ff17d3dc81849009cfca67d5d626a31) | [Figma Design Files](https://www.figma.com/file/cFDM1JqxOSem73IdYGSntU/Schematic-Capture?node-id=1%3A2)

An iOS/web app for capturing and annotating huge machines in some of the countries larger steel manufacturing facilities 🔥 It needs offline capabilities to be able to capture photos and annotate them in facilities that often have no network or signal available to them.

### Key Features

- Authentication with Okta
- Send registration invitation by email
- Import data from CSV to the database
- Upload PDF
- Import images to Dropbox
- 

# Tech Stack

### Front end deployed to [Amplify](https://schematiccapture.com) and built using:

- [Axios](https://www.npmjs.com/package/axios)

- [Color](https://www.npmjs.com/package/color)

- [CSV to JSON](https://www.npmjs.com/package/csvtojson)

- [Dotenv](https://www.npmjs.com/package/dotenv)

- [Lodash Throttle](https://www.npmjs.com/package/lodash.throttle)

- [React](https://www.npmjs.com/package/react)

- [React Hook Form](https://www.npmjs.com/package/react-hook-form)

- [React Textarea Autosize](https://www.npmjs.com/package/react-textarea-autosize)

- [React-Redux](https://www.npmjs.com/package/react-redux)

- [Redux](https://www.npmjs.com/package/redux)

- [Redux Thunk](https://www.npmjs.com/package/redux-thunk)

- [Sentry](https://www.npmjs.com/package/@sentry/browser)

- [Styled Components](https://www.npmjs.com/package/styled-components)

- [Sweet Alert](https://www.npmjs.com/package/sweet-alert)

### [Backend](https://github.com/adastraz/schematic-capture-be) deployed to [Heroku](https://www.heroku.com/) and built using:

#### NodeJs/Express/PostgreSQL

- Express server for resftul API.
- Familiarity and experience in creating production ready code.
- PGAdmin to quickly edit/view database.

# APIs
- See endpoint on BE

### [Okta](https://www.okta.com/)

Okta was the required field of authentication for Labs 22, so we made sure to abide by that.

### [Font Awesome](https://fontawesome.com/)

Font Awesome is a default icon set used throughout the Schematic Capture web app.

### [Sendgrid](https://sendgrid.com/)

Sendgrid is a email delivery service which allow Schematic Capture to send invitation emails with invite tokens.

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_BASE_URL - Base URL for the backend

# Content Licenses

| Filename | Source / Creator | License                               |
| -------- | ---------------- | ------------------------------------- |
| Icons    | Font Awesome     | [Free](https://fontawesome.com/plans) |

# Testing

### [Cypress](https://www.cypress.io/)

We chose to use Cypress beacuse it is a complete end-to-end testing suite.

### [Sentry](https://sentry.io/)

Sentry provides cloud-based error monitoring that helps the software team, discover, triage, and prioritize errors in real-time.

### [Uptime Robot](https://uptimerobot.com/)

Uptime Robot is a service that monitors the website every 5 minutes and alerts the software team if the site is down.

# Installation Instructions

This project is setup using create-react-app (CRA). You will not need to install CRA in order to make this project work. Follow the steps below to setup the project with the proper dependencies.

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository in your terminal
- [ ] CD into the project base directory `cd schematic-capture-fe`
- [ ] Download project dependencies by running the command `yarn`
- [ ] Using yarn, start up the app using `yarn start`
- [ ] Create a new feature branch: git checkout -b `<new-feature>`. Implement the project on your newly created `<new-feature>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<new-feature>`.

## Scripts

    * start - starts the production server after a build is created
    * build - creates a build of the application
    * coverage - runs test coverage using jest
    * test:cypress - initializes cypress testing
    * test:jest - initializes jest testing
    * eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

- See [Backend Documentation](https://github.com/Lambda-School-Labs/schematic-capture-be/) for details on the backend of our project.
- See [iOS Documentation](https://github.com/Lambda-School-Labs/schematic-capture-ios/) for details on the backend of our project.
- See [PVD](https://www.notion.so/Schematic-Capture-d4594ebf93ff4c6aba7942aea0546fea) for details on product overview.
