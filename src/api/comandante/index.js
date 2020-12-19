const express = require('express');
const router = express.Router();

const dbConnection = require('../../db');

router.get('/', (req, res) => {//post //get

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

});


router.post('/', (req, res) => {//post
  // //start
  let query = 'INSERT INTO bgqgix3fbzndh3h9py0n.comandante ( nombres, apellidos, grado, telefono) VALUES("' + req.body.nombres + '","' + req.body.apellidos + '","' + req.body.grado + '","' + req.body.telefono + '")';
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
      res.status(200).json({
        availableTables: req.body,
      })
    }

  });
  // //end

});


///
/////PARA MODIFICAR UPDATE

// router.patch('/', (req, res) => {//post
//   // //start
//     // UPDATE `bgqgix3fbzndh3h9py0n`.`comandante` SET `nombres` = 'Cristian' WHERE (`idcomandante` = '1');
//   let query = 'UPDATE bgqgix3fbzndh3h9py0n.comandante SET nombres = '+req.body.nombres+'  WHERE (idcomandante ="'+ req.body.id +'" )';
  
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
//       res.status(200).json(data[0], { Respuesta: "los Datos Fueron Actualizados Correctamente. :)"})
//     }

//   });
//   // //end

// });


module.exports = router;