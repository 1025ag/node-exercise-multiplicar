const opciones = {  
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opciones)
    .command('listar', 'Genera un archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
};

