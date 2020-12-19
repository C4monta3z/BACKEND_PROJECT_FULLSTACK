const express = require('express');
const router = express.Router();

const dbConnection = require('../../db');

router.get('/', (req, res) => {//post //get

  dbConnection.query('SELECT * FROM bgqgix3fbzndh3h9py0n.estudiante;', (err, data) => {
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

});

router.post('/', (req, res) => {
  // INSERT INTO Estudiante
  // //start
  let query = 'INSERT INTO bgqgix3fbzndh3h9py0n.estudiante ( nombres, apellidos, grado, telefono) VALUES("' + req.body.nombres + '","' + req.body.apellidos + '","' + req.body.grado + '","' + req.body.telefono + '")';
  console.log('Mi query:');
  console.log(query);
  dbConnection.query(query, (err, data) => {//(3, C4, MONTA3ZZ, OF, 33333333333 )
    if (err) {
      console.log('The: ', err);
      res.status(500).json({
        error: err
      });
    }
    else {
      res.status(201).json({rta: "Datos INSERTADO "})
    }

  });
  //   //end
});

  module.exports = router;