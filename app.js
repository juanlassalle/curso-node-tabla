const {crearArchivo} = require('./helpers/multiplicar.js')
const argv = require('./config/yargs.js')


console.clear()


/* const [ , ,arg3] = process.argv
const [ , base] = arg3.split('=') */


//console.log(argv);


crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'.green))
    .catch(err => console.log(err))

