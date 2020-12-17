const express = require('express');
const router = express.Router();

const dbConnection = require('../../db');

router.get('/', (req, res) => {//post //get

  // // dbConnection.query('SELECT table_name FROM information_schema.tables;', (err, data) => {
    dbConnection.query('SELECT * FROM bgqgix3fbzndh3h9py0n.comandante;', (err, data) => {
    if (err) {
      console.log('The: ', err);
      res.status(500).json({
        error: err
      });
    }
    else {
      res.status(200).json({
        availableTables: data,
      })
    }
  });


  // INSERT INTO
  // INSERT INTO `bgqgix3fbzndh3h9py0n`.`comandante` (`nombre`, `apellidos`, `grado`, `telefono`) VALUES ('3', ' C4', 'MONTA3Z', 'PT', '3333333333');
// //start
//   let query = 'INSERT INTO bgqgix3fbzndh3h9py0n.comandante (idcomandante, nombre, apellidos, grado, telefono) VALUES("'+ req.body.idcomandante +'","' + req.body.nombre + '","'+ req.body.apellidos + '","' + req.body.grado +'","'+ req.body.telefono +'")';
//   console.log('Mi query:');
//   console.log(query);
//   dbConnection.query(query, (err, data) => {//(3, C4, MONTA3ZZ, OF, 33333333333 )
//     if (err) {
//       console.log('The: ', err);
//       res.status(500).json({
//         error: err
//       });
//     }
//     else {
//       res.status(200).json({
//         availableTables: req.body,
//       })
//     }

//   });
//   //end

});


module.exports = router;
