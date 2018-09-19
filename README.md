# Weathrly

<img width="1346" alt="screen shot 2018-09-19 at 6 04 53 am" src="https://user-images.githubusercontent.com/32209705/45752317-4c27c080-bbd2-11e8-808f-2fd9b27884a6.png">

<img width="1339" alt="screen shot 2018-09-19 at 6 05 13 am" src="https://user-images.githubusercontent.com/32209705/45752355-65c90800-bbd2-11e8-93d0-8e5ea5214b25.png">

<img width="1433" alt="screen shot 2018-09-19 at 6 05 40 am" src="https://user-images.githubusercontent.com/32209705/45752356-65c90800-bbd2-11e8-9841-6f5773b99524.png">

<img width="1421" alt="screen shot 2018-09-19 at 6 05 57 am" src="https://user-images.githubusercontent.com/32209705/45752357-65c90800-bbd2-11e8-8408-997ac69853a0.png">


## Context
It’s important to know what Mother Nature is going to throw at you each day – what if you wear flip flops because it’s sunny and 65 degrees in the morning and then it snows all afternoon (this is Colorado, after all).

As web developers you’re going to be living in the context of the web. With this next project you will be interacting with a web-api. Ultimately this is going to be a preview for what the real world is going to look like for most of you. Data is important and thats what the API provides. As a web-developer you will be giving value to that data by visualizing and organizing that data for your user base.

In this project you will be getting your first real interactions with ReactJS, asynchronous javascript, and managing the state of your application.

Required Technology

- ReactJS
- fetch for api requests
- weather underground API

Use create-react-app for your project. We’ll learn how to configure the testing environment in our testing lesson later this week.

## Requirements
Your weather underground API key should not be stored on github. Store it in a seperate file. This file should be added to your .gitignore file.

Your app should have at a minimum the following components.

App
Welcome
Search
Current Weather
7 Hour Forecast
10 Day Forecast
Card (used in 7 hour and 10 day)
Design Requirements
Your Readme should include wireframes of your app.

## Phase one
Create your Current Weather component

You will create your User Interface using mock data. This will speed up your development time by not waiting for api requests. You can find the mock data here. Copy it into a seperate file that you can then import into your App file.

Your Current Weather component should display the following information

the name of the current city
the current condition
the current day
the current temperature
the expected high and expected low for the day
a summary of what the weather is going to be like that day (“Windy, chance of a few late night showers. Lows overnight in the mid 50s.)

## Phase two
The application should have a 7 hour weather forecast component. Each hour should be a card component and should display
the hour
an image that reflects the weather
the projected temperature
Application should handle when a user searches for a location that is not found by the API. Team should research different ways to handle unfound locations by looking around on different weather and other location searching applications and implement a solution for their project that they find intuitive.

## Phase three
The application should have a 10 day forecast component. Each day should be a card component and should display
the name of the day
an image that reflects the weather
the projected high and low temperature

## Phase four
Your application should have a welcome page that greets the user. The welcome page has a search component.
The search component consists of an input field and a submit button that allows the user to search for a location (the location should work with both a zip code and city/state).

Once the desired location is submitted there should be a way for the user to change location information. Once the location information is changed the weather should reflect the desired location.

location persists after refresh.

## Phase five
Add autocomplete functionality to your search input
import your completeMe into your Weathrly project. Populate it with this list of city/states. When a user starts typing in a city/state or zip code display a list of possible suggestions using your completeMe’s suggest function.
Extensions
If a user clicks on a specific day on the 10 day forecast the application should display an hourly breakdown of the forecasted weather for a 24-hour period.
For each hour it should display an image that reflects the weather
For each hour it should display the projected temperature and the hour
Add one or two examples of Micro-Interactions found on Dribbble or Behance in your ReadMe that inspired your design

The application is fully accessible.
The application can be used without a mouse
zero axe-core violations
Use Sass / SCSS to style your projects



![img_2085](https://user-images.githubusercontent.com/36767936/45490319-04152380-b724-11e8-813d-4cc618f6ad13.jpg)
![img_2086](https://user-images.githubusercontent.com/36767936/45490323-08414100-b724-11e8-9ced-8ca1d27d0aea.jpg)
![img_2087](https://user-images.githubusercontent.com/36767936/45490334-0bd4c800-b724-11e8-8079-b773ddff39c3.jpg)
![img_2088](https://user-images.githubusercontent.com/36767936/45490337-0d05f500-b724-11e8-8aec-e9974e0e9d43.jpg)
