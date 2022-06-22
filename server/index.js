const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("dddddd");
  res.send("hello world");
});

app.get("/class/getClass", (req, res) => {
  db.query("SELECT * FROM class", (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

app.post("/class/add", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const numOfStu = req.body.numOfStu;
  console.log("add info class: ", id, name, numOfStu);

  db.query(
    "INSERT INTO class (id, name, numberOfStudent) values(?,?,?)",
    [id, name, numOfStu],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
