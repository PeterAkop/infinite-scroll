#Task
Infinite scroll - Frontend Test

As a user I would like to view the Paragraphs of a Contract.

Acceptance Criteria:

- The page must contain the title of the Contract.
- The page must lazy load paragraphs progressively to prevent scripting lockups.
- The user must not have to do any work to request for more Paragraphs apart from scrolling.
- We must reach the page via the following URL `/contract/dc89ff49-8449-11e7-ac1d-3c52820efd20`

#How To Run

1. Make sure nodejs and npm or yarn are installed on local machine
2. Clone repository
3. Run `yarn start:mock` to run backend mock on
http://localhost:4000
4. Run `yarn start` to run App on http://localhost:3000
5. Open landing page and enter contact id 'dc89ff49-8449-11e7-ac1d-3c52820efd20' or go the following URL `http://localhost:3000/contract/dc89ff49-8449-11e7-ac1d-3c52820efd20`
6. Run `yarn test` to run tests

#Project Details

###Technologies used for backend mocking
Nodejs, Express

###Data generation flow
Mocked data is generated on start of the backend mock and will generate 10 pages that contain 100 paragraphs 

###Technologies used for front end
React, Material-ui

###Technologies used for testing
Jest, Enzyme, testing-library/react# infinite-scroll
