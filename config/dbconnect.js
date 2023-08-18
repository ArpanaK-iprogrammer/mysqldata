//const async = require('hbs/lib/async')
const mysql = require('mysql')
require('dotenv').config()

const con =mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
})

module.exports={con}



// exports.connect=async()=>{

     
// }