let app = require('express')();
const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer()

/*app.get('*', (req, res) => {

  const app = new Vue({
    data: {
      url: req.url,
      time: 0,
    },
    template: `<div>The visited URL is: {{ time }}</div>`,
    mounted() {
      this.getTime();
      console.log("Component mounted!!!");
    },
    methods: {
      getTime() {
        setInterval(() => {
          this.time = Date.now();
        },1000);
      }
    }
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error');
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
});*/

app.get('/',(req,res) => {
  res.send("Hello world");
});

app.listen(8000);
