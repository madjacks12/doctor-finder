# Doctor-Finder
#### _By Matthew Jackson, 2/16/2018_

This webpage finds doctors in the Portland, OR area that work with an issue the user specifies. The user can also lookup doctors by name. This app uses the Better Doctor API to locate doctors based on user input. The API key is stored in a .env folder not pushed to Github. to use this app, you must get your own API from Better Doctor here: https://developer.betterdoctor.com/ and include your API key in a .env file stored in the top level of the project directory.

## Getting Started

To run this webpage you will need to have Gulp and NodeJS installed on your computer.

## Setup

1. `$git clone https://github.com/madjacks12/doctor-finder`
2. Run `$ npm install` and `$ bower install` inside that directory.

## Usage
1. To start the browser syncing and file watching, just first run `$ gulp build` followed by  `$ gulp cssBuild`.
**Note:** I am unsure if the development server is live reloading correctly.

## Future development
Eventually this app will search the entire United States and link to the doctors' office's webpages.

## Bugs

No known bugs.
