const express = require('express')
const empsRelatedRoutes = require('./routes/emp');
const app = express()

app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

app.use(express.json());

app.use('/emp', empsRelatedRoutes);

app.listen(4000, () => {
    console.log('Server started at port 4000...')
})


