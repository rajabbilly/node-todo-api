const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server", err);
  }
  console.log("Connected to mongodb server.");
  //   findOneAndUpdate
  //   db.collection("Todos")
  //     .findOneAndUpdate(
  //       {
  //         _id: new ObjectID("5c9e88fb877fe2c127f785e5")
  //       },
  //       {
  //         $set: {
  //           completed: true
  //         }
  //       },
  //       { returnOriginal: false }
  //     )
  //     .then(result => {
  //       console.log(result);
  //     });

  db.collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5c9e0e71ca423b380a46d05b")
      },
      {
        $set: {
          name: "Maira"
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );

  //   db.close();
});
