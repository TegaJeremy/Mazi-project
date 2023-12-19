const express = require ("express")
const app = express()
app.use(express.json())
const PORT = 1010
const db = require('./config/db')
const router = require('./router/clientRouter')
const agentRouter = require ("./router/agentRouter")

app.use(router)
app.use(agentRouter)





app.listen(PORT, ()=>{
    console.log(`connected to port ${PORT}`)
})
