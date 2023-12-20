const express = require('express');
const app = express();
const adminRoute = require('./routers/adminRoute');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/admin',adminRoute);

const PORT = 3010
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))

