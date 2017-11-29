// Script to stop the mongod server
var conn = new Mongo();
// use notdetest2
var db = conn.getDB("nodetest2");
/*
You can use db.getSiblingDB() as an alternative to the use <database> helper. This is particularly useful when writing scripts using the mongo shell where the use helper is not available
*/
db = db.getSiblingDB('nodetest2'); 

db.userlist.deleteMany({}); // delete all

var u1 = db.userlist.insert({
  'username' : 'test1','email' : 'test1@test.com','fullname' : 'Bob Smith','age' : 27,'location' : 'San Francisco','gender' : 'Male'
});

printjson(u1);  // { "nInserted" : 1 }

/*
var u2 = db.userlist.insert({ "username" : "testuser2", "email" : "testuser2@testdomain.com" });
print(u2);     // WriteResult({ "nInserted" : 1 })
*/
/* 
To print all items in a result cursor in mongo shell scripts, use the following idiom:
*/
function printAll(query) {
  var result = [];
	var cursor = db.userlist.find(query);
	while ( cursor.hasNext() ) {
		 result.push( cursor.next() );
		 printjson( result.slice(-1)[0]);
	}
  return result;
}

/*
print("*********** testuser2 *********");
u2 = printAll({ "username": "testuser2" }).shift();  // the only one in the array

let newstuff = [
      { "username" : "testuser3", "email" : "testuser3@testdomain.com" }, 
      { "username" : "testuser4", "email" : "testuser4@testdomain.com" }
];
db.userlist.insert(newstuff);

print("************** All ***************");
// Updates an existing document or inserts a new document, depending on its document parameter.
// If the document contains an _id field, then the save() method is equivalent to an update with the upsert option set to true and the query predicate on the _id field.
db.userlist.save({"_id": u2._id, "username" : "Juan", "email": "juan@gmail.com" });
printAll({});
*/
