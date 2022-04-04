const express = require('express');
let port = 30001;
let app = express();
app.use(express.static('.'));
app.listen(port);
console.log("Listening on " + port);