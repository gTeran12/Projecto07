var express = require('express');
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL NOMBRE_CLASE */
const users = require('../models').user;

router.get('/findAll/json', function(req, res, next) {

  /* MÉTODO ESTÁTICO findAll  */

  users.findAll({
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })
  .then(resultado => {
      res.json(resultado);
  })
  .catch(error => res.status(400).send(error))

});

router.get('/findById/:id/json', function(req, res, next) {

  let id = req.params.id;

  users.findByPk(id)
      .then(instancia => {
        if(instancia) {
          res.status(200).json(instancia);
        } else {
          res.status(404).json({error: "No existe registro con el identificador "+id})
        }
      })
      .catch(error => res.status(400).send(error))
});
 /*REST API: POST
 Cree el controlador para el verbo POST de la ruta /save que recibe los
 datos en el cuerpo del requerimiento y guarda los datos en la base de datos relacional*/

router.post('/save', function(req, res, next) {

  users.create(req.body)
    .then(instancia => {
      res.status(201).json(instancia);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error al crear el registro' });
    });

});
/*REST API: PUT
Cree el controlador para el verbo PUT de la ruta /update/:id que recibe
los datos en el cuerpo del requerimiento y actualiza los datos en la base de datos relacional.*/
router.put('/update/:id', function(req, res, next) {

  let id = req.params.id;

  users.findByPk(id)
    .then(instancia => {
      if(instancia) {

        instancia.update(req.body)
          .then(instanciaActualizada => {
            res.status(201).json(instanciaActualizada);
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => res.status(400).send(error))

});

/*REST API: DELETE
Cree el controlador para el verbo DELETE de la ruta /delete/:id que recibe los datos
en el cuerpo del requerimiento y elimina los datos en la base de datos relacional. */

router.delete('/delete/:id', function(req, res, next) {

  let id = req.params.id;

  users.findByPk(id)
    .then(instancia => {
      if(instancia) {

        instancia.destroy()
          .then(() => {
            res.status(204).json({ mensaje: 'Registro eliminado'});
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al actualizar el registro' });
          });

      } else {
        res.status(404).json({error: "No existe registro con el identificador "+id})
      }
    })
    .catch(error => res.status(400).send(error))

});

module.exports = router;
