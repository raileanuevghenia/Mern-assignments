const mongoose = require('mongoose');
const dbName = "productDb";

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {console.log("You succesfully connect to the" + dbName + "database!")})
.catch((err) => {console.log("There was a problem connect to the" + dbName + "database!", err)})
