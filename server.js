let PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
app.use(express.static("public"));
const router = require("./controllers/burgers_controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

app.use(router);