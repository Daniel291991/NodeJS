
const File = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {  

    console.log('------------------------------'.green);
    console.log(`Tabla ${base}_limite-${limite}`.yellow);
    console.log('------------------------------'.red);
    for(let i = 1; i <= limite; i++){
        console.log(`${base } * ${i} = ${base * i}\n`);
    }           
}


let crearArchivo = (base, limite) => {

    return new Promise ( (resp, error) => {
        
        if(!Number(base)){
            error(`el valor introducido ${base} no es un número`);
            return;
        }
    let data = '';

    for(let i = 1; i <= limite; i++){
        data += `${base } * ${i} = ${base * i}\n`;
    }

    File.writeFile(`tablas/tabla-${base}_limite-${limite}.txt`, data, (err) => {
        if (err) 
            error(err)
        else
            resp(`tabla-${base}_limite-${limite}.txt`)        
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla    
}

