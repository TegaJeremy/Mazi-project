const mongoose = require('mongoose')
const agentSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
  
    password:{
        type:String,
        required:true
    },
    client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'clientData' }],

    isAgent:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
)

const agentModel = mongoose.model('agent data', agentSchema )

module.exports = agentModel