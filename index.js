const express = require('express')
const {router} = require('./routes/route.js')

const app = express();
app.use(express.json());
app.use(router)
const PORT = 3000;

app.use('/',router)

app.listen(PORT,()=>{
    console.log(`App is running on port number ${PORT}`);
})

