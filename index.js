const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const itemModel = require("./models");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
mongoose
  .connect("mongodb://mongo:27017/node-docker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json("Helo");
});

app.post("/post", async (req, res) => {
  const data = new itemModel(req.body);
  console.log(data);
  const response = await data.save();
  console.log(response);
  res.json(response);
});

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is up! ");
});
//docker exec -it <containerName> bash
//docker run -d -p 2717:27017 -v ~/<directry>:/data/db --name <contaner namr> image
