let app = require('express')();

app.get('/',(req,res) => {
  res.send("Hello world");
});

app.listen(8000);
