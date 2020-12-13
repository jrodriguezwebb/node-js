
const {crearArchivo} = require('./multiplicar/multiplicar');
let argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    }
}).argv;

console.log(argv);

crearArchivo(argv.base)
    .then(archivo => { console.log(`El archivo tabla-${archivo}.txt ha sido creado`); });
    