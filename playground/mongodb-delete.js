const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server", err);
  }
  console.log("Connected to mongodb server.");

  //   deleteMany
  //   db.collection("Todos")
  //     .deleteMany({ text: "Eat lunch" })
  //     .then(
  //       result => {
  //         console.log(result);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   deleteOne
  //   db.collection("Todos")
  //     .deleteOne({ text: "Eat lunch" })
  //     .then(
  //       result => {
  //         console.log(result);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   findOneAndDelete
  //   db.collection("Todos")
  //     .findOneAndDelete({ text: "Eat lunch" })
  //     .then(
  //       result => {
  //         console.log(result);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );

  //   db.collection("Todos")
  //     .deleteOne({
  //       _id: ObjectID("5ca096ba877fe2c127f79306")
  //     })
  //     .then(
  //       result => {
  //         console.log(result);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );

  //Challenge
  db.collection("Users")
    .findOneAndDelete({ _id: new ObjectID("5c9e7062f68e793a20861d5b") })
    .then(
      result => {
        console.log(result);
      },
      err => {
        console.log(err);
      }
    );
  //   db.close();
});
