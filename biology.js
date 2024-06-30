const express = require("express");
const Result = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insertbio", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result("biology", "Insertbio", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Deletebio:ID", (req, res) => {
  let Details = req.params.ID;
  Result("biology", "Deletebio", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Updatebio:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result("biology", "Updatebio", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Readbio:_ID", (req, res) => {
  const Details = req.params._ID;
  Result("biology", "Readbio", Details)
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