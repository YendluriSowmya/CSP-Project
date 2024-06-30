const express = require("express");
const Result = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insertmat", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result("maths", "Insertmat", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Deletemat:ID", (req, res) => {
  let Details = req.params.ID;
  Result("maths", "Deletemat", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Updatemat:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result("maths", "Updatemat", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Readmat:_ID", (req, res) => {
  const Details = req.params._ID;
  Result("maths", "Readmat", Details)
    .then((result) => { 
      res.send({ Message: result.Message, Result: result.rows });  
    })
    .catch((err) => {
      res.send(err); 
    });
});


// Router.post("/Login", (req, res) => {
//   let Details = req.body;
//   console.log(Details);
//   Result("Chemistry", "Login", Details)
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = Router;