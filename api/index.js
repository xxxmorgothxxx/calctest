const express = require('express');
const router = express.Router();

// Aquí defines la ruta 'inserta' que envía el contenido HTML y JavaScript
router.get('/inserta', (req, res) => {
  const htmlContent = `
    <div id="miContenido" class="fran">
      <button id="miBoton">Haz clic aquí</button>
      <p>Este es un texto de ejemplo que será insertado en la página.</p>
    </div>
    <script>
      document.getElementById('miBoton').addEventListener('click', function() {
        alert('¡Botón presionado!');
      });
    </script>
  `;
  res.send(htmlContent);
});

module.exports = router;
