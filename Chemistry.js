const express = require("express");
const Result = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insertche", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result("Chemistry", "Insertche", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Deleteche:ID", (req, res) => {
  let Details = req.params.ID;
  Result("Chemistry", "Deleteche", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Updateche:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result("Chemistry", "Updateche", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Readche:_ID", (req, res) => {
  const Details = req.params._ID;
  Result("Chemistry", "Readche", Details)
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