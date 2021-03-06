const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const indexRoute = require("./routes/index");
const articleRoute = require("./routes/article");
const createArticleRoute = require("./routes/createArticle");

app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/create", createArticleRoute);

app.listen(port, () => {
  console.log("example app listening at http://localhost:${port}");
});
