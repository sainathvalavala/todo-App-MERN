const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("express");
  console.log("express");
});
// app.get("/addTodo", (req, res) => {
//   console.log(req.query);
//   res.send("req sent");
// });
app.post("/addTodo", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send("req sent");
});

app.listen(3000, () => {
  console.log("server is running on port no: 3000");
});
// console.log(app)
