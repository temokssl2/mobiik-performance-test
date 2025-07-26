
# mobiik-performance-test

## Cómo clonar y ejecutar la prueba de rendimiento con k6

### Prerrequisitos
- [k6](https://k6.io/docs/getting-started/installation/) debe estar instalado en tu sistema.
- No es necesario Node.js para ejecutar la prueba, solo k6.

Para ejecutar el script de k6, cada usuario debe instalar k6 en su computadora. Así se hace:

1. Ve a la página oficial de instalación de k6: https://k6.io/docs/getting-started/installation/
2. Sigue las instrucciones para tu sistema operativo (Windows, macOS o Linux). Por ejemplo, en Windows puedes usar Chocolatey:
   ```sh
   choco install k6
   ```
   O descarga el instalador directamente desde la web de k6.
3. Después de instalar k6, abre una terminal o símbolo del sistema y ejecuta:
   ```sh
   k6 version
   ```
   Esto debe mostrar la versión instalada de k6, confirmando la instalación.

### Pasos

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/temokssl2/mobiik-performance-test.git
   cd mobiik-performance-test
   ```

2. **Ejecuta el script de k6:**
   ```sh
   k6 run load-test.js
   ```

3. **(Opcional) Exporta los resultados a JSON:**
   ```sh
   k6 run --out json=output.json load-test.js
   ```
   Luego puedes analizar los resultados o importarlos en Excel/Google Sheets para generar reportes.

### Descripción del script
- El script simula 50 usuarios concurrentes, aumentando en 60 segundos, manteniéndose por 5 minutos y luego disminuyendo.
- Cada usuario envía una petición POST cada 10 segundos con datos aleatorios.
- Endpoint objetivo: `https://jsonplaceholder.typicode.com/posts`

### Resultado
- k6 mostrará un resumen de métricas de rendimiento en la terminal al finalizar la prueba.
- Si exportaste a JSON, los resultados estarán en `output.json`.

Para más información, visita la [documentación de k6](https://k6.io/docs/).
