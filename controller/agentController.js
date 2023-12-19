
const agentmodel = require('../model/agentModel')


exports.registerAgent = async (req, res)=>{
    const {email, password} = req.body

    const existingEmail = await agentmodel.find({email})
    // if(existingEmail){
    //     return res.status(404).json({message:'email already registered'})
    // }
    const loginPassword = 12345
    const newAgent = new agentmodel ({
        email,
        password : loginPassword
    })
    if(password !== password){
        res.status(404).json({message:"please use the correct and assgined passwored"})
    }
  const savedAgent = await newAgent.save()
  res.status(200).json({message:'registered successfully', data:savedAgent})
    
 
}

// const loginAgent = async (req,res)=>{
//     try {
//         const {email,password} = req.body
//         email = "agent@gmail.com"
//         password = 12345
//         if ()
        
//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// }