const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve,reject) => {
        let data = '';

        for (let i = 1; i <= 10; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if(err) reject(error)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo
}
