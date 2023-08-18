
//const async = require('hbs/lib/async')
const schema = require('../middleware/schema')



exports.valid=async(req,res,next)=>{

    console.log("from valid",req.body)

    const user = {
        email:req.body.email,
        password:req.body.password
    }

   let result= schema.validateUser_login(user)
   
   if(result.error){
       return(res.json({ status: result.error.details[0].message }))

       //return(res.json('custom message))
   }
   


    next()


}