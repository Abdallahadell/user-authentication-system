const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const registrationRouter = require('/usr/src/app/src/api/Registration');
const loginRouter = require('/usr/src/app/src/api/Login');
app.use(cors());
app.use(express.json());

app.use('/api/registration', registrationRouter);
app.use('/api/login', loginRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});