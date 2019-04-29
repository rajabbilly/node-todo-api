const { ObjectID } = require("mongodb");

const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { Users } = require("../server/models/user");

// Three methods for deleting documents
// Todo.renove({}) removes all documents
// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove() Returns removed document, you can pass any criteria in find object
Todo.findOneAndRemove({ _id: "5cc5e50a8a53a9da142ea971" })
  .then(todo => {
    console.log(todo);
  })
  .catch(e => console.log(e));

// Todo.findByIdAndRemove() Returns removed document, you only use the ID
// Todo.findByIdAndRemove("5cc5e5078a53a9da142ea970").then(
//   todo => {
//     console.log(JSON.stringify(todo, undefined, 2));
//   },
//   err => {
//     console.log(JSON.stringify(err, undefined, 2));
//   }
// );
