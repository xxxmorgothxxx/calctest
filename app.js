const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');


/* app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola desde mi API!' });
}); */

app.get('/', (req, res) => {
    //res.send("Hola desde la API");
    res.sendFile(path.join(__dirname + "/api/index.html"));
});

app.listen(port, () => {
  console.log(`API escuchando en puerto: ${port}`);
});

/* const cors = require('cors');
app.use(cors({
  origin: "https://https://cbc43b-2.myshopify.com/"
})); */


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      return res.status(200).json({})
    }
    next()
  })