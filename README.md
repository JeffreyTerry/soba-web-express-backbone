### SoBA Web Development

##### Express and Backbone

Fork this repository to your GitHub account and clone it to your machine. You will need to cd into the directory and run npm install to install the module dependencies.

Complete both homework assignments. Homework 1 should be easy. Homework 2 will be challenging. Do not put it off! 

Refer to the [Backbone Documentation](http://backbonejs.org/) and to the extremely helpful and free [Developing Backbone.js Applications](http://addyosmani.github.io/backbone-fundamentals/) book, which should become a reference for your work this semester.

**Homework 1**

Based on the sample code included in this repository, extend the application's functionality to include support for comments. Use the pattern we applied to posts: you will need to create an additional Backbone model, collection and two views, one for an individual comment and the other for a list of comments.

You should be able to navigate to the comments for a post from a post, which means you will need to add a "comments" link to each post, set up an event for that link, and handle that link dynamically in one of your views. When the user clicks the comments link, replace the entire contents of the page with the comments for that post. Include a back link that the user can click to return to the posts listing.

Notice that the URL is not updating when you click the link and that the back function in the browser does not work. We will address this in the next session on Backbone.

**Homework 2**

Add support for creating and deleting both comments and posts to your application. You may need to create an additional view for new posts and one for new comments. Leverage Twitter Bootstrap's support for dialogs and forms. To implement delete you will need a delete link and event handler in the appropriate views. You may need to update your collection and/or model listeners to re-render views when a create or delete event occurs.

Modify the server code to actually handle the creation and deletion calls to the API. Make sure your routes are set up correctly and call the correct method on the appropriate controllers. The controllers should then call a method on the model module that internally updates the array of posts or comments.

I think this will work as node continues to run in memory between requests, but obviously, restarting the server will cause your changes to be lost.

In our next class we will learn how to use MongoDB to actually save and update our data. It'll be cool.