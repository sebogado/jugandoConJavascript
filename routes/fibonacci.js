var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
   res.send(200, {
       numero:calcularFibonacci(parseInt(req.query.cantidad)-1)
   })
});


const calcularFibonacci = (numeroIteraciones) => {
    let segundoNumero = 1;
    let primerNumero = 1;
    if(numeroIteraciones<2) {
        if(numeroIteraciones < 0 ) {
            return 'Error: La cantidad de iteraciones debe ser mayor a 0';
        } else {
            return primerNumero;
        }

    } else {
        for(let i = 1; i < numeroIteraciones; i++) {
            let aux = primerNumero + segundoNumero;
            primerNumero = segundoNumero;
            segundoNumero = aux;
        }
        return segundoNumero;
    }
};
module.exports = router;
