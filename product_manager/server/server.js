const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// config mongoose to connect
require('./config/mongoose.config');

//add routes to listen
require('./routes/product.routes')(app);

app.listen(8000, () => {
    console.log("The express app server is listening on port" + 8000);
})