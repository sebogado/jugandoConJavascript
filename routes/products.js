var express = require('express');
var router = express.Router();

const arr= [
  {
    id:1,
    name:"Zapatillas Nike 2.0",
    quantity: 40,
    description:"Zapatillas comodas unisex"
  },{
    id:2,
    name:"Chomba lacoste rosa aflamencado",
    quantity:120,
    description:"Chombas comodas de tela premium"
  },{
    id:3,
    name:"Jordan XXXII",
    quantity:40,
    description:"Las Jordan que usa Kawhi Leonard"
  },{
    id:4,
    name:"Camiseta de los spurs 2018/2019",
    quantity:100,
    description:"Camiseta de los san antonio spurs"
  },{
    id:5,
    name:"Camiseta Jordan Retro 98",
    quantity:23,
    description:"Camiseta Jordan Retro 23"
  },{
    id:6,
    name:"Zapatillas New Balance urbanas",
    quantity:34,
    description:"Zapatillas urbanas new balance para salir"
  },{
    id:7,
    name:"Campera puma seleccion italia",
    quantity:43,
    description:"Campera puma azul francia, del 2018"
  }];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(arr);
});
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  res.send(arr.filter(element => element.id == id));
});

module.exports = router;
