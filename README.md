# Emaily app

This is a full stack web application that allows users to send surveys to a list of emails. The app uses a credit system to send surveys to users. The app uses the following technologies:

- Node.js
- Express
- MongoDB
- Google OAuth

## Authentication

The app uses Google OAuth for authentication. Users can sign in using their Google account.

The app uses cookies to keep track of the user's session.

Google OAuth is implemented using the `passport` and `passport-google-oauth20` libraries.

Find the App credentials in the Google Developer Console, under the account `tchappel.dev@gmail.com`, project `emaily`.

The credentials in the file `config/keys.js` are to be used in the development environment only. This file is not committed to the repository. Ask the project owner for a copy of the credentials.
