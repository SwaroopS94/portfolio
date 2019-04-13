let app = require('express')();
let fs = require('fs');

const NODE_PORT = 8080;

app.use("/about-me", (req, res) => {
  try {
    fs.readFile('./mocks/mock.json', 'utf8', (err, data) => {
      console.log("Error : ",err," : ",data);
      res.status(200).json(data);
    });
  }
  catch(e) {
    res.status(400).send(e.toString());
  }

});
app.listen(NODE_PORT);
