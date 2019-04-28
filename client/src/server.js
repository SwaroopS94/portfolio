const app = require("express")();

const body_parser =require("body-parser");

app.use(body_parser.urlencoded({extended: false}));

app.use(body_parser.json());

app.use("/health",(req,res) => {
  res.send("{status: healthy}");
});

app.use("/send", (req, res) => {
  console.log("Request body : ",req.status, req.query, req);
  res.send("{response : getting mailer body request}");
});


app.listen(8080,() => {
  console.log("Listening to server");
});