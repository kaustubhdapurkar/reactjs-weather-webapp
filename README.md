# Weather App using ReactJS and create-react-app

This is a ReactJS project which fetches weather data :sunny: :snowflake: :umbrella: :cloud: from https://openweathermap.org/ using their weather APIs and displays this data using a minimal web-app interface. Good for beginners to implement new features or to just get the idea of how react can fetch data from APIs and handle the recieved data using different components which display and manipulate it.

## Installation

This project can be run on your local machine using Node package manager's `npm start`.

##### Requirements:

1. Node.js (https://nodejs.org/en/)
2. Openweathermap API key (https://openweathermap.org/api)
3. Code editor (ex. VS Code, JetBrains WebStorm)

#### Following are the steps to run the project on your local machine.

##### Step :one: :

Clone or download this project, and open the project directory in your CLI.

##### Step :two: :

After opening the directory perform `npm start`. This should start the web-app at localhost:3000 if the port is not being used in
your browser.

##### Step :three: :

You can start editing the code and your changes will be reflected in the browser window after you save your code.

#### Known Issues:

##### Issue :one: :

If an invalid City Name is entered, the app produces a `404 (Not Found)` error in the console.

###### Note:

Before you run the app you will have to **enter your API key** and assign it to the variable `apiKey` in (../src/App.js)

###### About .gitignore:

This project is being hosted on Google Firebase at https://kd-reactjs-weather-app.web.app and all the Firebase Configuration Files
have been ignored from the original directory.
The original API key that I used is stored in (../src/config.js) and is being ignored to hide the API key. You can edit the code by writing your own API key and removing the `import apiKeys from "./config.js"` and writing `apiKey = '<Your API KEY>'` at line no. 10 in (../src/App.js) as mentioned before.

**Happy Coding**:heart:
