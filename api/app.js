const express = require("express")
const app = express()
const env = require('dotenv')
app.use(express.json())
env.config()

const PORT = process.env.PORT
const {verifyUserAccessToken} = require("./helper/jwt_helper")





require("./helper/DB")()

app.use("/auth",require("./router/auth"))

app.use("/test",require('./router/movies'))


app.get("/",async(req,res)=>{
    

})

app.listen(PORT,()=>console.log(`Server Running on ${PORT}`))