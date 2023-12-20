const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3010
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))

