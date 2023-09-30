# Features

- User Login, and Signup.
- User Authorisation - Once the user is logged in then the server gives a Access token which expires in 10 min after which the user provides a refresh token to get the new access token. Without the access token, the user wouldn't be able to see other blogs, create, edit new or existing blogs. This entire process happens in the background
- User can create new Blogs in markdown
- User can see the time that will be taken to read the blog
- User can edit existing blogs provided it is written by him.
- Add tags to your blogs
- User can delete existing blogs provided it is created by him.
- Authentication is done without using any libraries (other than jwt).
- Complete ui is created without using any libraries (including the snackbar)
- ~~A User can add comments to other's blogs~~
- ~~View a user's profile (All blogs written by him)~~

# Running this app locally

Please follow these steps to run the app locally

**PS**: Sorry I already have maxed out the number of apps I could deploy for free on heroku.

## 1. Clone this repo.

Firstly to clone this github repo, navigate to the directory where you wanna clone and run

```
git clone https://github.com/Karan-Gandhi/Web-dev-Induction-Assignment.git
```

## 2. Install the dependencies

Run the following commands:

```
yarn install
cd server
yarn install
```

## 3. Set the enviorment variables

Go to server/.env_sample, and replace the `ACCESS_TOKEN_SECRET_SAMPLE` and the `REFRESH_TOKEN_SECRET_SAMPLE` with a randomly generated hex string (64 bytes) to do this you can just run:

```
node
require('crypto').randomBytes(64).toString('hex')
require('crypto').randomBytes(64).toString('hex')
```

This will give you 2 strings, replace it with `ACCESS_TOKEN_SECRET_SAMPLE` and the `REFRESH_TOKEN_SECRET_SAMPLE` and rename the file from .env_sample to .env

## 4. Run the server

To run the server open a instance of the terminal and run the following commands

```
cd server
yarn build
yarn start
```

This will build the server in the dist folder and run it on port `5000`.

## 5. Run the Fronend Web App

Open another instance of the terminal and run

```
yarn start
```

A new browser window will open, showing the login screen. (The front-end runs on port `3000`)

# Tech stack

- Server is made in Nodejs (Typescript)
- Firebase for databasing (Firebase Firestore)
- React (Typescript) for the front-end
