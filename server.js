const express = require('express');

const app = express();

const web_files = express.static("public");

app.use(web_files);

app.listen(process.env.port || 3000);
