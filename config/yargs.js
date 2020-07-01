const opcion  = {
    base: {
        demand: true,
        alias: 'B'
    }, 
    limite: {
        demand: true,
        alias: 'L'        
    }
}

const argv = require('yargs')
                    .command('lista', 'Imprime en consola', opcion)
                    .command('crear', 'Genera un archivo',  opcion)
                    .help()
                    .argv;

module.exports = {
    argv
}