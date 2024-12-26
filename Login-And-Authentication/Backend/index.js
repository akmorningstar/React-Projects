const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
app.use(bodyParser.json());
app.use(cors()); //we can also restrict the origin of the request by passing the origin in the cors function but for now we are allowing all origins

app.use('/auth',require('./routes/auth'));
app.use('/users',require('./Routes/functionality'))


