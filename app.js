const colors = require('colors');
const colors2 = require('colors/safe');
const argv = require('./config/yargs').argv;

const {crearArchivo, listarTabla} = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'lista':
        console.log('Iniciando');
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear': 
        console.log('Iniciando');
        crearArchivo(argv.base, argv.limite)
                    .then(archivo => console.log(`archivo creado: `, colors2.green(archivo))) 
                    .catch(e => console.log(e))
    break;

    default:
        console.log('comando no reconocido');
}


  //let base = 16; 

  //let argv2 = process.argv; //comando para ingresar desde consola argv
  //console.log(argv.base);
  //console.log('limite', argv.limite);
  //let parametro = argv[2];
  //let base = parametro.split('=')[1];
  //console.log(base);
  /* crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`)) 
    .catch(e => console.log(e)) 
 */