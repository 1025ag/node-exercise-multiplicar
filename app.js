const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
const { base, limite } = argv;

switch (comando) {
    case 'listar':
        listarTabla(base,limite)
        console.log('listar')
        break;
    case 'crear':
        crearArchivo(base, limite).then(archivo => console.log(`Archivo creado: ${archivo}`.green)).catch(console.log);
        console.log('crear');
        break;

    default:
        console.log('Comando no reconocido');
};




// const { calcularTablas } = require('./multiplicar/tablas');
// calcularTablas(base).then(archivo => console.log(`Archivo creado:${archivo}`)).catch(console.log);