const rcon = require('../config/dbconnect')




exports.insert=(email,password)=>{


   const result = rcon.con.query('insert into user(email,password)values(?,?)',[email,password],(error,result)=>{
        console.log("in query")
           if(error){
             console.log(error)
         }
         else{
             console.log("1 user inserted")
             //return res.json({result:result})
             //console.log(result)
             return result
         }
   
       })

       return result
}