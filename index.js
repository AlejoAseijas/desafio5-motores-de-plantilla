const path = require("path");
const express = require("express");
const app = express();
const PORT = 8080;
const router = require("./routes");
//const { engine } = require("express-handlebars");

const server = app.listen(PORT, () => {
  console.log(`Server on port ${server.address().port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.engine(
//   "handlebars",
//   engine({
//     extname: "hbs",
//     defaultLayout: "main.hbs",
//     layoutsDir: path.resolve(__dirname, "./views/layouts"),
//     partialsDir: path.resolve(__dirname, "./views/partials"),
//   })
// );

//sapp.set("views", "./views");
//app.set("view engine", "handlebars");
//app.set("view engine", "pug"); //pug
app.set("view engine", "ejs"); //ejs

app.use("/api", router.routes);

server.on("error", (error) => {
  console.log(`Server error ${error}`);
});
