const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/index");

const app = express();
const PORT = 5000;

app.use(cors());

// Pick and choose which middleware you want
// You will definitely add to and subtract from this list

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", userRouter);

app.get("/", (request, response) => {
  response.send("Working");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
