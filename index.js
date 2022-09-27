const express = require("express");
const app = express();
const PORT = 5000;

const routes = require("./routes/index.js");
const MSSVroutes = require("./routes/mssv.js");
const messageRouter = require("./routes/message");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} http://localhost:5000${req.url}`);
  next();
});

app.use("/", routes);
app.use("/19110342", MSSVroutes);
app.use("/message", messageRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
