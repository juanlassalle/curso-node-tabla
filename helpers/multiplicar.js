const fs = require('fs')
const color = require('colors')

const crearArchivo = async (base=5,listar=false,hasta) => {

    
    try {
        let salida = ''
        let consola = ''

        for (let i = 0; i <=hasta; i++) {
    
            salida+= `${base} X ${i} = ${base*i}\n`;// no es necesario await
            consola+= `${base} X ${i} = ${base*i}\n`.blue;
        }
        if (listar) {
            console.log('============================='.bgMagenta);
            console.log('   Tabla del:'.bgMagenta,color.blue( base));
            console.log('============================='.bgMagenta);
            console.log(consola);
            
        }
       
    
        /* fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
            if (err) throw err
    
            console.log(`tabla-${base}.txt`);
        }) */
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
        return `tabla-${base}.txt`.magenta;
    } catch (error) {
        throw error
    }
   
}

module.exports = {
    crearArchivo
}