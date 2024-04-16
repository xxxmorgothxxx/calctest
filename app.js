const express = require('express');
const cors = require('cors');
const path = require('path');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
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

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/api/index.html"));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`API escuchando en puerto: ${port}`);
});
