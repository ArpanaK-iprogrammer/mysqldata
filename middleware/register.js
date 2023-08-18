
const rcon = require('../config/dbconnect')
const {insert} = require('../services/register_service')

exports.register=async(req,res,next)=>{

    console.log("in register")
    const email = req.body.email
    const password = req.body.password

    //const result = insert(email,password)

     const result = insert(email,password)  
     console.log(result)

     if(result){
        return res.json({result:result})
     }

    // rcon.con.query('insert into user(email,password)values(?,?)',[email,password],(error,result)=>{
    //  console.log("in query")
    //     if(error){
    //       console.log(error)
    //   }
    //   else{
    //       console.log("1 user inserted")
    //       return res.json({result:result})
    //   }

    // })

}