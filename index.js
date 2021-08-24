const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level="debug"; // "production"

logger.info("La aplicaciòn se iniciò con exito.");
logger.warn("CUIDADO Falta la libreria X en el sistema.");
logger.error("No se encontró la función enviar email");
logger.fatal("No se inició la aplicación");

function sumar(x, y) {
  return x + y;
}

module.exports = sumar;
