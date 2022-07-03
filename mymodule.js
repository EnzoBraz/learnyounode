const fs = require('fs');
const path = require('path');

module.exports = function(diretorio, ext, callback) {
    ext = '.' + ext;

    fs.readdir(diretorio, function (err, files) {  
        if (err) {
            return callback(err)
        };
    
        let listaFinal = []
        files.forEach(function(file) {
            if (path.extname(file) === ext) {
                listaFinal.push(file);
            }
        })

    return callback(null, listaFinal);
    })

}