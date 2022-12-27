let process = require ('process')
let archivo = require ('./funcionesDeTareas')
 
let accion = process.argv[2]



switch (accion) {
  case "listar":
    console.log('\nListado de tareas');
    console.log('----------------');
    archivo.listarTareas();
    break;
    case 'crear' : 
    let titulo = process.argv [3]
    let estado = process.argv [4]
    console.log('|nTu tarea fue creada con exito');
    console.log('-----------------');
    archivo.crearTareas(titulo,estado)
    break;
  case undefined:
      console.log("---------------------------------\nAtención - Tienes que pasar una acción\nLas acciones disponibles son:\n----------------------------------------------------------");
    break;
  default:
    console.log("No entiendo qué quieres hacer");
    break;
}
