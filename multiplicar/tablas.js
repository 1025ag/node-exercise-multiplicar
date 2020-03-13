//REQUIREDS
const fs = require('fs');

let contenido = '';

const calcularTablas = (base) => {

    return new Promise((resolve, reject) => {

        if( !Number(base) ) { 
            reject(`El valor introducido: ${base} no es número. `)
            return;
        };

        for (let i = 1; i < 10; i++) {
            for (base = 0; base < 10; base++) {
                contenido += `${base} * ${i + 1} = ${base * (i + 1)}\t`;
            };
            contenido += '\n';
        };

        fs.writeFile('tablas/tablas.txt', contenido, (err) => {
            if (err) reject(err);
            else resolve('tablas.txt');
        });

    });
}

module.exports = { 
    calcularTablas
};