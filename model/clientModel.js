const mongoose = require('mongoose')
const clientSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:String,
        required:true
    },
    placeOfBirth:{
        type:String,
        required:true
    },
    nationality:{
        type:String,
        required:true
    },
    joiningPoint:{
        type:String,
        required:true
    },
    rankOnBoard:{
        type:String,
        required:true
    },
    passPortNo:{
        type:String,
        required:true
    },
    portOfEngagement:{
        type:String,
        required:true
    },
    seamanBookNo:{
        type:String,
        required:true
    },
    payCommencementOn:{
        type:String,
        required:true
    },
    portOfRepatriation:{
        type:String,
        required:true
    },
    medicalCertIssuredOn:{
        type:String,
        required:true
    },
    employeeNo:{
        type:String,
        required:true
    },
    forServiceOnBoard:{
        type:String,
        required:true
    },
    contractOrServiceDuration:{
        type:String,
        required:true
    },
    // isAgent:{
    //     default:false
    // },
    password:{
        type:String,
        required:true
    },
},{timestamps:true}
)

const clientModel = mongoose.model('clientData', clientSchema )

module.exports = clientModel