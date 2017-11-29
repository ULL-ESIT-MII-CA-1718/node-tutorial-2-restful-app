* [Creating a Simple RESTful Web App with Node.js, Express, and MongoDB](https://closebrace.com/tutorials/2017-03-02/creating-a-simple-restful-web-app-with-nodejs-express-and-mongodb)
* [MongoDB: Server has startup warnings ''Access control is not enabled for the database](https://stackoverflow.com/questions/41615574/mongodb-server-has-startup-warnings-access-control-is-not-enabled-for-the-dat)

### Exercise

1. change the example in `stateless` to use a true server
2. ... That's it. We've got delete working. You can now add, view, and delete as many users as you'd like. Since this tutorial's already the length of a dictionary, we're going to skip updating, but hopefully you have a solid idea of how to do that. First you'd GET the info and populate a form with it, then you'd PUT on submission of the form, and update the table.

Actually, that's not a bad exercise: you should try to add updating user info to this page and see if you can get it working. You'll need to edit /views/index.pug, /routes/users.js, /app.js, and /public/javascripts/global.js just like for adding and deleting.
