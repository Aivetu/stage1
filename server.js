const express = require('express');
const app = express();
const PORT = process.env.PORT || 8091;


app.use(express.json());
const route = require('./route/endpoint.route');


app.use('/api',route);


app.listen(PORT, ()=> console.log(`Server running on port ${PORT} `));
