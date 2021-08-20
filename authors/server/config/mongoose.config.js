const mongoose = require('mongoose');
const dbName = "authorDb";

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => {console.log("You succesfully connect to the" + dbName + "database!")})
.catch((err) => {console.log("There was a problem connect to the" + dbName + "database!", err)})