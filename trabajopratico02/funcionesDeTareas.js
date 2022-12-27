const fs = require("fs");
const tareas = require('./tareas.json');
let guardar = (dato)=> fs.writeFileSync(`./tareas.json`,JSON.stringify(dato,null,4),`utf-8`)

let archivoTareas = {
  leerJson: tareas,
  listarTareas : function () {
    for (let i = 0; i < tareas.length; i++){
   console.log(`${i+1}. ${tareas[i].titulo} - ${tareas[i].estado}`);
      
    }
  },
  crearTareas: (titulo,estado)=>{
    let tarea = {
        titulo,
        estado
    }
    tareas.push(tarea)
    guardar(tareas)
    return console.log(`*${tarea.titulo} - ${tarea.estado}`);
  }
}
module.exports = archivoTareas