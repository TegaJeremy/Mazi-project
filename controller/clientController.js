const clientModel = require ('../model/clientModel')
const bcrypt = require('bcryptjs')


// const register = async (req,res=>{
//     try {
//         const{fullName,email,dateOfBirth,placeOfBirth,nationnality,joiningPoint,rankOnBoard,passPortNo,portOfEngagement,seamanBookNo,payCommerenceOn,
//             portOfRepatriation,employeeNo,forServiceOnBoard,contractOrServiveDuration,password}= req.body
        
//             const registeredEmail = await clientModel.find()
//     } catch (error) {
//       res.status(500).json(error.message)
//     }
// })
const register = async (req, res) => {
    try {
      const { fullName, email, dateOfBirth, placeOfBirth, nationality, joiningPoint, rankOnBoard, passPortNo, portOfEngagement, seamanBookNo, payCommencementOn, 
        portOfRepatriation,medicalCertIssuredOn, employeeNo, forServiceOnBoard, contractOrServiceDuration, password } = req.body;
  
      // Use await with find to get the registered email
      const registeredEmail = await clientModel.find({email})

      const user = new clientModel({
        fullName,
        email,
        dateOfBirth,
        placeOfBirth,
        nationality,
        joiningPoint,
        rankOnBoard,
        passPortNo,
        portOfEngagement,
        seamanBookNo,
        payCommencementOn,
        portOfRepatriation,
        medicalCertIssuredOn,
        employeeNo,
        forServiceOnBoard,
        contractOrServiceDuration,
        password
        
      })
      const savedUser = await user.save()
      if(registeredEmail){
        return res.status(200).json({ message: 'Registration successful', data:savedUser });
      }
        
      // Rest of your registration logic goes here
  
   
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const login = async (req,res)=>{
    try {
      const {email,password} = req.body

      const clientEmail = await clientModel.findOne({email})
      if(!clientEmail){
        return res.status(200).json({message:'Email not registered'})
      }
     
      const passwordMatched = await bcrypt.compare(password, client.password);

      if (!passwordMatched) {
        return res.status(404).json({
          message: 'Incorrect password',
        });
      }
      res.status(200).json({message:'login successful'})
      
    } catch (error) {
      res.status(500).json(error.message)
    }
  }



  const getAllClient = async (req,res)=>{
    try {
       const getAll = await clientModel.find()
       if(getAll){
        return res.status(200).json({message:'all registered client on the databace are', data:getAll})
       }

    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  


  module.exports={
    register,
    login
  }