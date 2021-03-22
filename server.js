const express = require('express');
const router = require("./routes/htmlRoutes");
const routes = require("./routes/apiRoutes");

const app =  express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(router);

app.use(routes);


app.listen(PORT, () => console.log (`Server started on http://localhost:${PORT}`));
