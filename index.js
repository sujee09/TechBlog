const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

const port = process.env.PORT || "8000";

app.listen(port, () => {
  console.log(`listening to requests on localost:${port}`);
});
