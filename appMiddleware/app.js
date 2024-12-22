const express =require('express')
const userRoute = require('./routes/user-route')
const userLogger = require('./middleware/user-logger')

const app = express()
app.use(userLogger)
app.use(express.json())
app.use('/api/users',userRoute)


const port = 3000

app.listen(port, ()=>{
    console.log(`Server run at http://localhost:${port}/api/users`);
})