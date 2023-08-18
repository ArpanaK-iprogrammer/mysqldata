const express = require('express')
const app = express()

const db = require('./config/dbconnect')


const path = require('path')
const route_login = require('./router/route_login')


const public_path = path.join(__dirname,'./public')
console.log(public_path)

db.con.connect((error)=>{
    if(error){
        console.log('Can not connected to database',error)
    }
    else{
        console.log("Connected to database")
    }
})

//app.use()
app.use(express.json())
app.use(express.static(public_path))

//app.get('/',)
app.use('/',route_login)

app.listen(process.env.PORT,()=>{
    console.log("App started on port "+process.env.PORT)
    
})
