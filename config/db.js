const mongoose = require('mongoose')
require ('dotenv').config()

mongoose.connect('mongodb+srv://oghenedemartin:kfYNuBfz1wpo6R97@cluster0.tplhyik.mongodb.net/').then(()=>{
    console.log("connected to database successfully")
}).catch((error)=>{
    console.log(error.message)
})




// mongoose.connect(process.env.url).then(()=>{
//     console.log("connected to database successfully")
// }).catch((error)=>{
//     console.log(error.message)
// })
