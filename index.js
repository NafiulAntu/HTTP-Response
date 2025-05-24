import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1> Nafiul Islam </h1>");
});

app.get("/me", (req, res) => {
  res.send("<h1> About me </h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1> about you </h1>");
});
app.get("/you", (req, res) => {
  res.send("<h1>  i need a slave </h1>");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

