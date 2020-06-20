## Travel App
The Travel app is the final project of the Udacity frontend nanodegree course. It uses a location and date as input from the client and will pull information from 3 different APIs, to show the weather at the desired location.
User can save the trip data in localStorage and later delete it.


## Tools
The app will use Node.js and Express.js to set a webserver and routing, as well as Google Workbox. Webpack is the build tool used in this project.
For styling the project uses Sass and Google fonts.

## Get Up and Running
1. clone/download the project from GitHub: https://github.com/lenuza/travel-app.git

2. cd travel-app ( to move into the project folder)

3. npm i ( to install the node modules)

4. Note: You will need to create your own API key for:
[GEONAMES](http://www.geonames.org/export/web-services.html),
[WEATHERBIT](https://www.weatherbit.io/account/create),
[PIXABAY](https://pixabay.com/api/docs/).

 Create a .env file in the root directory of the project and add inside:

GEONAMES_APP_ID='your ID'
WEATHERBIT_APP_KEY='your KEY'
PIXABAY_APP_KEY='your KEY'