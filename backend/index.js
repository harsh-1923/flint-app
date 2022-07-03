const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());

app.use(cookieParser());
app.use(express.json());

const url = require("./env.js").url;
const PORT = process.env.PORT || 8000;

const userRouter = require("./routes/UserRouter");
app.use("/api/user", userRouter);

const notesRouter = require("./routes/NotesRouter");
app.use("/api/notes", notesRouter);

const workSpaceRouter = require("./routes/WorkSpaceRouter.js");
app.use("/api/workspace/", workSpaceRouter);

const toDoRouter = require("./routes/ToDoRoutes.js");
app.use("/api/todos", toDoRouter);

const linkRouter = require("./routes/LinkRoutes.js");
app.use("/api/link", linkRouter);

// app.use('/api/payments', require('./routes/payments'));

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected, connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => console.log(`Server on at ${PORT}`));
