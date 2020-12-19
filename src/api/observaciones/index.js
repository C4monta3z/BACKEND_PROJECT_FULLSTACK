const express = require('express');
const router = express.Router();

const dbConnection = require('../../db');

router.get('/', (req, res) => {//post //get

    dbConnection.query('SELECT * FROM bgqgix3fbzndh3h9py0n.observaciones;', (err, data) => {
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

router.get('/:id', (req, res,) => {//post //get
    // SELECT * FROM bgqgix3fbzndh3h9py0n.observaciones where idobservaciones=2;
    dbConnection.query('SELECT * FROM bgqgix3fbzndh3h9py0n.observaciones WHERE idobservaciones='+req.params.id+';', (err, data) => {
    if (err) {
      console.log('The: ', err);
      res.status(500).json({
        error: err
      });
    }
    else {
      res.status(200).json({
        Datos_Obtenidos: data,
        // res.status(200).json( data[0])
      })
    }
  });

});


router.post('/', (req, res) => {//post
    // //start
      let query = 'INSERT INTO bgqgix3fbzndh3h9py0n.observaciones ( descripcion, puntos, comandante_idcomandante, estudiante_idestudiante) VALUES("' + req.body.descripcion + '","'+ req.body.puntos + '","' + req.body.comandante_idcomandante +'","'+ req.body.estudiante_idestudiante +'")';
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
            Respuesta: "Los Datos fueron insertados correctamente :)",
          })
        }
    
      });
     // //end
    
    });


    //For Update data 
    // UPDATE `bgqgix3fbzndh3h9py0n`.`observaciones` SET `descripcion` = 'Se realiza observacion por su compromiso y entrega' WHERE (`idobservaciones` = '1') and (`comandante_idcomandante` = '1') and (`estudiante_idestudiante` = '2');


module.exports = router;