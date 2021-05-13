# Front-end for Arch System's File Change Project

This project made to upload,share and download files. Requires [authentication service](https://github.com/ARManakhov/3rd_course_auth) and [main service](https://github.com/oas1s/3rd_course_back).

The program is written using javascript.

## Installation

Clone this git repository using 

`git clone https://github.com/AekoArray/arch-front.git`

Download and install [Node](https://nodejs.org/)

Install project dependencies:

`npm install`

## Tests

To run ui tests:

`mocha test/test-ui.js`

To run ui tests using Testcafe(you can use browsers like firefox, edge, chrome):

`testcafe firefox test-testcafe.js`

## Usage

you only need to run the main page - index.html

* index.html - main page
* registration.html - registration page
* auth.html - authorization page

## Patterns

* The ChoseUpdater file describes the strategy pattern. It allows you to modify the algorithms regardless of their use on the client side. In this case, if the browser supports WebSocket, the data is updated through them. Otherwise, a three-second update works
* The file connection.js describes the Decorator pattern. It allows you to dynamically configure the application. In our case, the code allows you not to write the URL every time, but to give it as a class

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
