
const {crearArchivo} = require('./multiplicar/multiplicar');
let argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    }
}).argv;

let comando = argv._[0];

switch(comando) {
    case 'listar':
        console.log('listar');
    break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => { console.log(`El archivo tabla-${archivo}.txt ha sido creado`); });
    break;
    default:
        console.log('Comando no reconocido');
}
