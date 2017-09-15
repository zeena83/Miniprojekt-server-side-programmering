var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var pug = require("pug");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", function(req, res) {
  res.render("rapport.pug");
});

app.get("/resultatrapportering", function(req, res) {
  res.render("resultatrapportering.pug");
});

app.get("*", function(req, res) {
  res.render("404.pug");
});

io.on('connection', (socket) => {
    console.log("Connected");
    socket.on("Disconnect",() => {
        console.log("Now disconnected.");
    });
    socket.on("rapport", (msg) => {
        io.emit("rapport", msg);
    });
});

http.listen(3000, () => {
  console.log("Listening to 3000...")
});
