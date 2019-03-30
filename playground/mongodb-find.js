const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server", err);
  }
  console.log("Connected to mongodb server.");

  //   db.collection("Todos")
  //     .find({
  //       _id: new ObjectID("5c9e88fb877fe2c127f785e5")
  //     })
  //     .toArray()
  //     .then(
  //       docs => {
  //         console.log("Todos");
  //         console.log(JSON.stringify(docs, undefined, 2));
  //       },
  //       err => {
  //         console.log("Unable to fetch todos", err);
  //       }
  //     );

  //   db.collection("Todos")
  //     .find()
  //     .count()
  //     .then(
  //       count => {
  //         console.log(`Todos count: ${count}`);
  //       },
  //       err => {
  //         console.log("Unable to fetch todos", err);
  //       }
  //     );
  db.collection("Users")
    .find({ name: "Rajab" })
    .toArray()
    .then(
      docs => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to fetch todos", err);
      }
    );
});
