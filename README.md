# Flipkart Clone

This project is a Flipkart clone version, created in **January 2023**. It is a **MERN stack** application that offers a range of features, including responsiveness, authentication, and account management.
![Screenshot 2024-12-19 222724](https://github.com/user-attachments/assets/d6d9c0b0-e128-422f-888f-5be8b63d9606)


## Features

- **Responsiveness:** The app is fully responsive across devices.
- **Authentication:** Custom authentication system for sign-up, login, and account management.
- **Routing:** Smooth navigation using React Router.

## Frontend

- **React:** Used for handling UI and state management.
- **Material-UI (MUI):** Only MUI and inline styling are used for styling the components.
- **React Router:** Enables seamless routing and navigation across pages.
- **Vite:** A fast build tool and development server for quick iterations.
- **HTML, CSS, JavaScript:** Provides structure, styling, and interactivity.
- **Redux:** State management is handled through Redux.

## Backend
- **Node.js:** Server-side runtime environment.
- **Express:** Web framework for building the REST API.
- **MongoDB:** NoSQL database for storing user information and notes.

## Installation

1. Clone the repository:
   `git clone https://github.com/bashirafarhin/Flipkart.git`
2. Install dependencies:
   `cd Flipkart`
3. Run the command `npm install` in both the client and server folders.
4. Set up environment variables:
   A sample `SampleEnvFile.txt` file is provided in the repository for your reference. You should create your own `.env` file in both directory of the project and update it with your own credentials.
5. Run the application/client:
   `npm run dev`
6. Run the server on new terminal:
   `nodemon index.js`
7. Open your browser and go to:
   `http://localhost:5173`
   
## Deployment
This application is deployed on Render's free tier, which may result in slower performance due to the cold start process. Free-tier servers are put to sleep after periods of inactivity (around 30 minutes), and waking them up can take approximately 30 seconds. This may cause the app to load more slowly initially.

If the site doesn’t appear on the first click, please wait for about 30 seconds and try again, as the server may be waking up.
The deployed link is present in the About section of the project.

