const express = require("express");
const Result = require("../Database");
// const Mapping = require("./Operations");
const Router = express.Router();

Router.post("/Insertreg", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Result("registration1", "Insertreg", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.delete("/Deletereg:ID", (req, res) => {
  let Details = req.params.ID;
  Result("registration1", "Deletereg", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Updatereg:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Result("registration1", "Updatereg", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Readreg:_ID", (req, res) => {
  const Details = req.params._ID;
  Result("registration1", "Readreg", Details)
    .then((result) => { 
      res.send({ Message: result.Message, Result: result.rows });  
    })
    .catch((err) => {
      res.send(err); 
    });

    // Sql = `select * from ${Parameters[0]}`;
    // if(Details != "All"){
    //   Sql = `select * from ${Parameters[0]} where Unitname = '${Details}'`;
});


// Router.post("/Login", (req, res) => {
//   let Details = req.body;
//   console.log(Details);
//   Result("register", "Login", Details)
//     .then((result) => {
//       res.send(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

module.exports = Router;