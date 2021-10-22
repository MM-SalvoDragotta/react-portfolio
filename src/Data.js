//Gifs
import groceriesGif from './assets/images/grocery-delivery-application.gif'
import techBlogGif from './assets/images/TechBlog.gif'
import noteTakerGif from './assets/images/NoteTaker.gif'
import COVID19TrackerGif from './assets/images/Covid19Tracker.gif'
import weatherDashboardGif from './assets/images/WeatherDashboard.gif'
import daySchedulerGif from './assets/images/dayscheduler.gif'

export const projects = [
  {
    id: 1,    
    title: "Grocery Delivery App",
    description:`
    This project is for an online department store customer and admin side.
    All items are listed on the website, with their quantities and prices.
    The admin can change stock, prices, delete products, add products and show current promotions.
    The application runs a <strong class="bold-red">RESTful API </strong>to retrieve or create data from it's database.
    The application is displayed with both front-end and back-end models, with authentication needed for the back-end (admin) side.
    The application uses <strong class="bold-red">Node.js, Express.js, Handlebars.js, MySQL, Sequelize ORM, Heroku.</strong>`,
    gif: groceriesGif,
    appUrl: "https://store-back-end-deployed.herokuapp.com/",
    repo :  "https://github.com/MM-SalvoDragotta/grocery-delivery-application" 
  },
  {
    id: 2,    
    title: "MVC Tech Blog",
    description:`
    A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts
    and comment on other developers’ posts as well.
    The app follows the <strong class="bold-red">MVC paradigm </strong>in its architectural structure, 
    using <strong class="bold-red">Handlebars.js</strong> as the templating language,
    <strong class="bold-red">Sequelize</strong> as the ORM, 
    and the <strong class="bold-red">express-session npm package</strong> for authentication.`,
    gif: techBlogGif,
    appUrl: "https://tech-blog-deployed.herokuapp.com/",
    repo :  "https://github.com/MM-SalvoDragotta/mvc-tech-blog" 
  },
  {
    id: 3,    
    title: "Note Taker",
    description:`
    This application uses an <strong class="bold-red">Express.js</strong> back end to save
    and retrieve note data from a <strong class="bold-red">JSON file. </strong> 
    This app is also live on <strong class="bold-red">Heroku.</strong>`,
    gif: noteTakerGif,
    appUrl: "https://note-taker-deployed.herokuapp.com/",
    repo :  "https://github.com/MM-SalvoDragotta/note-taker" 
  },
  {
    id: 4,    
    title: "COVID-19 Tracker",
    description:`
    The COVID-19-Tracker allows users to select a country and view COVID-19 data including confirmed cases, deaths and recoveries.
    Data is fetched from the <strong class="bold-red">Covid-19 Rapid API</strong> and rendered via <strong class="bold-red">Chart.js. </strong>
    Users can also select a previous date and view the COVID-19 totals up to that date.
    using <strong class="bold-red">Handlebars.js</strong> as the templating language,
    User searches are stored in local storage and appended below the search bar.`,
    gif: COVID19TrackerGif,
    appUrl: "https://mm-salvodragotta.github.io/Covid-19-Tracker/",
    repo :  "https://github.com/MM-SalvoDragotta/Covid-19-Tracker" 
  },
  {
    id: 5,    
    title: "Weather Dashboard",
    description:`
    This is a weather forecast dashboard app.
    Users are able to enter a city name in the search box and have current weather conditions displayed for that city,   
    as well a five day forecast. 
    Searched cities will be added below the search button and can be clicked on to display that cities weather data again.`,
    gif: weatherDashboardGif,
    appUrl: "https://mm-salvodragotta.github.io/open-weather-dashboard/",
    repo :  "https://github.com/MM-SalvoDragotta/open-weather-dashboard" 
  },
  {
    id: 6,    
    title: "Work Day Scheduler",
    description:`
    A simple calendar application that allows a user to save events for each hour of the day.
    This app will run in the browser and feature dynamically updated <strong class="bold-red">HTML and CSS powered by jQuery. </strong>
    Bootstrap and Moment.js are also used.`,
    gif: daySchedulerGif,
    appUrl: "https://mm-salvodragotta.github.io/work-day-scheduler/",
    repo :  "https://github.com/MM-SalvoDragotta/work-day-scheduler" 
  },
];