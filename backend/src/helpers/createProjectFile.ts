import fs from "fs/promises";
import path from "path";
const dirPath = path.join(__dirname + "/../projects");
const obtenerFechaActual = () => {
  const fecha = new Date(); // Obtener la fecha actual

  // Extraer componentes de la fecha
  const dia = String(fecha.getDate()).padStart(2, "0"); // Día del mes (2 dígitos)
  const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Mes (0 indexado, sumamos 1)
  const anio = fecha.getFullYear(); // Año completo

  // Extraer componentes de la hora
  const horas = String(fecha.getHours()).padStart(2, "0"); // Hora (24 horas)
  const minutos = String(fecha.getMinutes()).padStart(2, "0"); // Minutos
  const segundos = String(fecha.getSeconds()).padStart(2, "0"); // Segundos

  // Formatear la fecha como "día-mes-año hora:minuto:segundo"
  return `${dia}-${mes}-${anio}_${horas}_${minutos}_${segundos}`;
};

async function createProjectFile(name, user) {
  const refPdf = `${name}_${user}_${obtenerFechaActual()}`;
  const pathLocal = path.join(dirPath, refPdf);
  try {
    await fs.mkdir(pathLocal);
    const filePath = path.join(pathLocal, "index.tex");
    await fs.writeFile(filePath, "");
    await fs.access(filePath);
    return path.join(refPdf);
  } catch (error) {
    console.log(error.message);
    return "";
  }
}

export default createProjectFile;
