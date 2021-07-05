# My News App

My News App is a simple application that gives you up to 9 articles by your search request. It fetches articles from [https://gnews.io] api and displays the image, date and time of publication, title and description of the article. This app also logs search keywords together with details ( title and origin url ) of the clicked article.

My News App is also deployed in Heroku cloud, you can find it here: [My News App](https://karolis-news-app.herokuapp.com/).

##### How to run the app

* Install Node v14.16.1 or higher.
* Type `yarn install` in the terminal to install node modules.
* Type `yarn dev` to run project on local machine.

##### How to use the app

* App will run on http://localhost:5000. Open this adress on your browser.
* On first load you will find empty page with header, where in the right side you will find text input field. Write keywords for the news you would like to find and click **Find** button.
* You will get 9 results under your search. Click on one of them and original page with the article will open in new page.

