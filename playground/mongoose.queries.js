const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { Users } = require("./../server/models/user");

var id = "5ca25768939474a96733f936";

if (!ObjectID.isValid(id)) {
  return console.log("Id is not valid");
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos ", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found!");
//     }
//     console.log("Todo by Id", todo);
//   })
//   .catch(e => console.log(e));

Users.findById(id)
  .then(user => {
    if (!user) {
      return console.log("Unable to find user");
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => {
    console.log(e);
  });
