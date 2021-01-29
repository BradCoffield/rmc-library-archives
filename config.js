require('dotenv').config()
const {Pool} = require('pg')

// THIS IS THE POOL THAT WORKS LOCALLY. EVENTUALLY FIGURE THEM OUT.
const isProduction = process.env.NODE_ENV === 'production'
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})


// THIS IS THE POOL THAT WORKS FOR LIVE
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

module.exports = {pool}                  