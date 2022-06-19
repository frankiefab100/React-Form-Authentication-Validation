

# React-Form-Authentication-Validation

A form web app which allows a user to sign up and/or sign in using an email or using popular Federated Identity Providers (Google and Facebook).
Firebase handles the hosting and Identity Access Management (IAM).

<!-- COLLAPSABLE/EXPANDABLE TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-overview">Project Overview</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
    </li>
    <li>
      <a href="#feature-highlights">Features Highlights</a>
      <ul>
        <li><a href="#optimization">Optimization</a></li>
      </ul>
    </li>
    <li>
      <a href="#why-i-started-this-project">Why I started this project</a>
      <ul>
        <li><a href="#what-i-learnt">What I learnt</a></li>
      </ul>
    </li>
     <li><a href="#folder-structure">Folder Structure</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#sponsor">Sponsor</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

## **Project Overview** ✨

The goal is to build a user-friendly form making it easier for a user to log in either with a username/password or with their social accounts (such as Facebook or Twitter.

[PREVIEW VIDEO/GIF]

Preview Link: <https://form-auth-val.netlify.app/>

### **Technologies Used** 🛠

- React (UI Framework)
- React-Router (Routing Library)
- Firebase (Database & Hosting)

### **Resources** 🎨

- Google font: <https://fonts.google.com/>
- React-icons: <https://react-icons.github.io/react-icons>

## **Features Highlights** ⚡

- [x] Email/Password registration (Sign Up) and login (Sign In)
- [x] Form input validation using Regular expression pattern
- [x] Google and Facebook Provider for user authentication
- [x] React Router for easily navigation
- [x] Role based authorization using Protected routes

### Optimization 🚀

I would like to implement the following features to improve this project

- [] Password Show/Hide Toggle
- [] Password Reset
- [] Retrieve user's profile after the login

## Why I started this project 😇

- Fully developed websites require a form to give complete access to customers or users.
- Some forms use `uncontrolled elements` to handle form data which is old fashioned and bad practice.
- I wanted to experiment with Firebase Identity Providers and Database.

### **What I Learnt** 📖

This personal project took a lot of research. I was able to understand 

- React `useContext`, how to optimize and manage state in React using `ContextAPI`.
- Confirmation of password between 6 to 14 characters which must contain atleast least one lowercase letter, one uppercase letter, one numeric digit, and one special character.
- Authentication and authorization through either Google or Facebook and email adddress.

## **Folder Structure** 📁

```bash
├── public
│   ├── index.html
├── src
│   ├── authentication
│   │   ├── firebase
│   │   │   
│   ├── components
│   │   ├── Alert.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
|   |   |
│   ├── context
│   │   ├── AuthContext.js 
|   |   |
│   ├── protectedroute
│   │   ├── ForgotPassword.jsx   
│   │   ├── ProtectedRoute.jsx
│   │   ├── UserProfile.jsx  
|   |   |
│   ├── validation
│   │   ├── FormValidation.js 
|   |   |
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── .gitignore
├── package-lock.json
└── package.json
```

## **Getting Started** 💻

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### **Prerequisites**

Make sure you have [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed.

- Node.js (>= 17.4.0)
- NPM (>= 8.4.0)

### **Setup** 👨‍💻

> Usage: How to run this web app locally

1. Install dependencies
```npm install```

2. Run the development server
```npm run dev```

3. Navigate to `http://localhost:3000` in your browser to view the web app.

## **Contributing** 🤝🏾

Did you find bug(s) or want to request new feture(s)? Please visit the [Contributors guidelines](/CONTRIBUTING.md) to learn how to submit an issue or pull request.

## **License** 🔐

This project is built under the [MIT License](./MIT-License).

## **Sponsor** ❤

If you like this project, kindly star ⭐ and/or consider buying me coffee(s). Every donation is appreciated.

  <a href="https://www.buymeacoffee.com/frankiefab100">
    <img width="150px" alt="bmc-button" src="https://user-images.githubusercontent.com/62628408/127788747-8850d386-fc61-4fff-b18f-8c5ee597be34.png">
  </a>

## **Author** ✍

Franklin Ohaegbulam - [@frankiefab100](https://twitter.com/frankiefab100)
