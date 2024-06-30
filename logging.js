const express = require("express");
const Result = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insertlog", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result("logging", "Insertlog", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Deletelog:ID", (req, res) => {
  let Details = req.params.ID;
  Result("logging", "Deletelog", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Updatelog:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result("logging", "Updatelog", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Readlog:_ID", (req, res) => {
  const Details = req.params._ID;
  Result("logging", "Read", Details)
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