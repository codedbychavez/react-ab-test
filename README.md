# react-ab-test
A companion repository for the "How to implement A/B Testing in React?" article on [ConfigCat](https://configcat.com/)

The purpose of this app is to demonstrate how A/B testing can be implemented and executed in a React Application.    
In the article we tested how a change in a dollar amount discount ($20) vs a percentage amount discount (10%) may impact clicks on the `Shop Now` button.

We cover everything from integrating `amplitude-js` into our app to creating and tracking events while mimicking unique user clicks.

## About the app:
When the `Shop Now` button is clicked, an event is logged to the Amplitude analytics platform where we are able to analyze clicks made.
To mimic unique users we added the following lines:

    // Mimic a unique userId
    const UserId = 5697;
    amplitude.getInstance(AmplitudeInstance).setUserId(UserId);

Changing the value of `UserId` stimulates a new user that tricks Amplitude into registering another unique user to be tracked whenever the user clicks the `Shop Now` button.

## Feature Flags
It's worth noting that [ConfigCat’s](https://configcat.com/) feature flag services plays a **huge role in A/B testing**, making the entire testing experience seamless by the toggle of a button...   

Read the article to learn more!

## How to run this app?
1. Clone this repository
2. Run `npm install` to install the app dependencies 
3. Run `npm install` to run the app locally.
4. Thats it!

## What it looks like in the browser:
![image](https://user-images.githubusercontent.com/74829200/159141452-f9070379-9306-46c7-8809-15c3d829dd9a.png)
