// No necesitas requerir 'path' para definir rutas en Express

app.get('/inserta', (req, res) => { // Usa una cadena de texto para la ruta
  const htmlContent = `
    <div id="miContenido">
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
