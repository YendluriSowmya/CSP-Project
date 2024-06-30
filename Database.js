const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:1521/xe",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}  
  if (Parameters[0]=='Students10'){
    switch (Parameters[1]) {
      case "Insert":
        Sql = `insert into ${Parameters[0]} values('${Details.Unitname}','${Details.Unitlink}')`;
        break;
      case "Update":
        Sql = `update ${Parameters[0]} set Unitname = '${Parameters[3].Unitname}', Unitlink = '${Parameters[3].Unitlink}' where Unitname = '${Details}'`;
        break;
      case "Delete":
        Sql = `delete from ${Parameters[0]} where Unitname = '${Details}'`;
        break;
      case "Read":
          Sql = `select * from ${Parameters[0]}`;
          if(Details != "All"){
            Sql = `select * from ${Parameters[0]} where Unitname = '${Details}'`;
          }
        break;
      default:
        console.error("Invalid Parameters");
        break;
    }
  } 
  else if (Parameters[0]=='maths'){
    switch (Parameters[1]) {
      case "Insertmat":
        Sql = `insert into ${Parameters[0]} values('${Details.Unitname}','${Details.Unitlink}')`;
        break;
      case "Updatemat":
        Sql = `update ${Parameters[0]} set Unitname = '${Parameters[3].Unitname}', Unitlink = '${Parameters[3].Unitlink}' where Unitname = '${Details}'`;
        break;
      case "Deletemat":
        Sql = `delete from ${Parameters[0]} where Unitname = '${Details}'`;
        break;
      case "Readmat":
          Sql = `select * from ${Parameters[0]}`;
          if(Details != "All"){
            Sql = `select * from ${Parameters[0]} where Unitname = '${Details}'`;
          }
        break;
      default:
        console.error("Invalid Parameters");
        break;
    }
  } 

  else if (Parameters[0]=='Science'){
    switch (Parameters[1]) {
      case "Insertsci":
        Sql = `insert into ${Parameters[0]} values('${Details.Unitname}','${Details.Unitlink}')`;
        break;
      case "Updatesci":
        Sql = `update ${Parameters[0]} set Unitname = '${Parameters[3].Unitname}', Unitlink = '${Parameters[3].Unitlink}' where Unitname = '${Details}'`;
        break;
      case "Deletesci":
        Sql = `delete from ${Parameters[0]} where Unitname = '${Details}'`;
        break;
      case "Readsci":
          Sql = `select * from ${Parameters[0]}`;
          if(Details != "All"){
            Sql = `select * from ${Parameters[0]} where Unitname = '${Details}'`;
          }
        break;
      default:
        console.error("Invalid Parameters");
        break;
    }
  } 

  else if (Parameters[0]=='Chemistry'){
    switch (Parameters[1]) {
      case "Insertche":
        Sql = `insert into ${Parameters[0]} values('${Details.Unitname}','${Details.Unitlink}')`;
        break;
      case "Updateche":
        Sql = `update ${Parameters[0]} set Unitname = '${Parameters[3].Unitname}', Unitlink = '${Parameters[3].Unitlink}' where Unitname = '${Details}'`;
        break;
      case "Deleteche":
        Sql = `delete from ${Parameters[0]} where Unitname = '${Details}'`;
        break;
      case "Readche":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where Unitname = '${Details}'`;
        }
        break;
      default:
        console.error("Invalid Parameters");
        break;
    }
  } 
  else if(Parameters[0]=='registration1'){
    switch (Parameters[1]) {
      case "Insertreg":
        Sql = `insert into ${Parameters[0]} values('${Details.firstname}','${Details.lastname}','${Details.email}','${Details.mobile}','${Details.gender}','${Details.pwd}')`;
        break;
      case "Updatereg":
        Sql = `update ${Parameters[0]} set email = '${Details.firstname}','${Details.lastname}','${Details.email}','${Details.mobile}','${Details.gender}','${Details.pwd}' where email = '${Details}'`;
        break;
      case "Deletereg":
        Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
        break;
      case "Readreg":
        // Sql = `select * from ${Parameters[0]}`;
        // if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where email = '${Details}'`;
        // }
        break;
      default:
           console.error("Invalid Parameters");
           break; 
    }
  }
  else if(Parameters[0]=='logging'){
    switch (Parameters[1]) {
      case "Insertlog":
        Sql = `insert into ${Parameters[0]} values('${Details.username}','${Details.password}')`;
        break;
      case "Updatelog":
        Sql = `update ${Parameters[0]} set username = '${Parameters[3].username}',password = '${Parameters[3].password}' where username = '${Details}'`;
        break;
      case "Deletelog":
        Sql = `delete from ${Parameters[0]} where username = '${Details}'`;
        break;
      case "Readlog":
        Sql = `select email,pwd from ${Parameters[0]} where email='${Details}'`;
        console.log(sql);
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where username = '${Details}'`;
        }
        break;
      default:
            console.error("Invalid Parameters");
            break; 
     }
  }
  // else if(Parameters[0]=='contactus'){
  //   switch (Parameters[1]) {
  //     case "Insert":
  //       Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.problem}')`;
  //       break;
  //     case "Update":
  //       Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}',problem = '${Parameters[3].problem}', where name = '${Details}'`;
  //       break;
  //     case "Delete":
  //       Sql = `delete from ${Parameters[0]} where name = '${Details}'`;
  //       break;
  //     case "Read":
  //       Sql = `select * from ${Parameters[0]}`;
  //       console.log(sql);
  //       if(Details != "All"){
  //         Sql = `select * from ${Parameters[0]} where name = '${Details}'`;
  //       }
  //       break;
  //     default:
  //           console.error("Invalid Parameters");
  //           break; 
  //      }
  // }
  else if (Parameters[0]=='biology'){
    switch (Parameters[1]) {
      case "Insertbio":
        Sql = `insert into ${Parameters[0]} values('${Details.Unitname}','${Details.Unitlink}')`;
        break;
      case "Updatebio":
        Sql = `update ${Parameters[0]} set Unitname = '${Parameters[3].Unitname}', Unitlink = '${Parameters[3].Unitlink}' where Unitname = '${Details}'`;
        break;
      case "Deletebio":
        Sql = `delete from ${Parameters[0]} where Unitname = '${Details}'`;
        break;
      case "Readbio":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where Unitname = '${Details}'`;
        }
        break;
      default:
        console.error("Invalid Parameters");
        break;
    }
  } 
  else{
    console.log("error");
  }
    


  console.log(Sql);
  var result = await Query(Sql);
  return result;
};
module.exports = Result;