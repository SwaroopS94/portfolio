let app = require('express')();

app.get('/',(req,res) => {
  res.send("Hello world");
});

app.use("/send", (req, res) => {
  console.log("Request body : ",req.status, req);
  res.send("{response : getting mailer body request}");
});

app.listen(8000);
