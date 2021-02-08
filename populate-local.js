const axios = require("axios");
const fs = require("fs");
const { pool } = require("./config");
const pgp = require("pg-promise")({
  /* initialization options */
  capSQL: true // capitalize all generated SQL
});

// Database connection details;
const cn = {
  host: "localhost", // 'localhost' is the default;
  port: 5432, // 5432 is the default;
  database: "rmclibraryarchives",
  user: "brad",
  password: "postgressy"
};
const db = pgp(cn); // database instance;

(async () => {
  // try {
  //   const info = await db.any(
  //     "SELECT * FROM collegepublications ORDER BY id ASC",
  //     [true]
  //   );
  //   console.log(info, "yay");
  //   // success
  // } catch (e) {
  //   // error
  //   console.log(e, "aww");
  // }

// our set of columns, to be created only once (statically), and then reused,
// to let it cache up its formatting templates for high performance:
const cs = new pgp.helpers.ColumnSet(["filelocation", "filename", "date","institution", "subject1", "subject2","subject3", "subject4", "subject5","subject6", "subject7", "subject8", "notes"], {table: 'photos'});
    
// data input values:
let someValues = require('/home/brad/Documents/GitKraken/rmc-library-archives/photos.json')
// let someValues = JSON.parse(data)
// const values = [{col_a: 'a1', col_b: 'b1'}, {col_a: 'a2', col_b: 'b2'}];
    
// generating a multi-row insert query:
const query = pgp.helpers.insert(someValues, cs);
//=> INSERT INTO "tmp"("col_a","col_b") VALUES('a1','b1'),('a2','b2')
    
// executing the query:
await db.none(query);
})();

// const getCollection = (request, response) => {
//   console.log("oy");
//   const name = "historiccollections";
//   //   const name = request.params.name;
//   // console.log(req)
//   pool.query(`SELECT * FROM ${name} ORDER BY id ASC`, (error, results) => {
//     if (error) {
//       throw error;
//     }
//     console.log(results.rows);
//     // response.status(200).json(results.rows);
//   });
// };
// getCollection()

// this async worked with just pg to add something into historic collections in a way that seems more robust than what I use elsewhere
// had to manually add stuff instead of using the data variable. maybe there's a way but I think I need pg-promise to add a bunch of lines
// easily anyway

// (async () => {
//   // note: we don't try/catch this because if connecting throws an exception
//   // we don't need to dispose of the client (it will be undefined)
//   const client = await pool.connect();
//   try {
//     await client.query("BEGIN");
//     let data = [
//       {
//         number: "HC01",
//         name: "RMC History",
//         date: "",
//         contents: "College of Montana - 1",
//         subject: "Historic Collection"
//       }
//     ];
//     const queryText =
//       "INSERT INTO historiccollections (number, name, date, contents, subject) VALUES ($1, $2, $3, $4, $5) RETURNING id";
//     const res = await client.query(queryText, ["HC01","RMC History","", "College of Montana - 1", "Historic Collection" ]);
//     // const insertPhotoText =
//     //   "INSERT INTO photos(user_id, photo_url) VALUES ($1, $2)";
//     // const insertPhotoValues = [res.rows[0].id, "s3.bucket.foo"];
//     // await client.query(insertPhotoText, insertPhotoValues);
//     await client.query("COMMIT");
//   } catch (e) {
//     await client.query("ROLLBACK");
//     throw e;
//   } finally {
//     client.release();
//   }
// })().catch(e => console.error(e.stack));
