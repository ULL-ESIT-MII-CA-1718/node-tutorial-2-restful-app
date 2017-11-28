var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("pre-install-mongo", shell.task([
      "brew update && brew install mongodb",
]));

gulp.task("pre-install", shell.task([
      "npm i -g gulp static-server",
      "npm install -g nodemon",
]));

/*
If you have mongodb installed via homebrew, homebrew actually has a handy brew services command. To show current running services:

brew services list

To start mongodb:

  brew services start mongodb

To stop mongodb if it's already running:

  brew services stop mongodb

NOTE: I have not found the way to specify options for mongodb when running brew services start mongodb

*/
gulp.task("services", shell.task("brew services list"));


/*
By default, MongoDB listens for connections from clients on port 27017, and stores data in the /data/db directory.

If you want mongod to store data files at a path other than /data/db you can specify a dbPath. The dbPath must exist before you start mongod. 
If it does not exist, create the directory and the permissions so that mongod can read and write data to this path. 

To specify a dbPath for mongod to use as a data directory, use the --dbpath option. 

  https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/#start-mongod-processes

    Also: "mongod -f mongod.conf",
*/
gulp.task("start", shell.task("((test -d data) || (mkdir data))  && (mongod --dbpath data)"));

/*
Shut down the mongod from the mongo shell using the db.shutdownServer() method as follows:

  use admin
  db.shutdownServer()

The --shutdown option cleanly and safely terminates the mongod process. When invoking mongod with this option you must set the --dbpath option either directly or by way of the configuration file and the --config option.

https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/#stop-mongod-processes

WARNING: Never use kill -9 (i.e. SIGKILL) to terminate a mongod instance.
*/

// The --shutdown option is available only on Linux systems.
// gulp.task("stop", shell.task("mongod --dbpath data --shutdown"));
gulp.task("stop", shell.task("mongo ./stop-mongod.js"));
gulp.task("session", shell.task("mongo ./mongo-session.js"));

gulp.task("push", shell.task("git add . && git ci -am changes && git push origin master"));
gulp.task("lint", shell.task("jshint *.js **/*.js"));
