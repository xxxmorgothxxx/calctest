const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');

const cors = require('cors');

app.get('/', (req, res) => {
  //res.send("Hola desde la API");
  res.sendFile(path.join(__dirname + "/api/index.html"));
});

app.listen(port, () => {
  console.log(`API escuchando en puerto: ${port}`);
});

/* app.use(cors({
  origin: "https://cbc43b-2.myshopify.com",
  credentials: true
})); */

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
};

const domainsFromEnv = process.env.CORS_DOMAINS || "";

const whitelist = domainsFromEnv.split(",").map(item => item.trim());

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));