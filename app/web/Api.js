const express = require('express')
const router = express.Router()
const https = require('http')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const dbConnection = require('../config/dbConnection')

/**
 * Respuesta de error
 */
const response400 = {
  estado: '401',
  mensaje: 'ERROR',
  data: {
    token: 'error'
  }
}

/**
 * Método POST: /post/autorización - generación de nuevo token
 */
router.get('/clientes/', (req, res) => {

  const conn = dbConnection()
  const query = 'SELECT nombre_cliente FROM cliente ' +
    'WHERE id_cliente = ' + 1

  try {
    /**
     * Parámetros correctos
     */
    const result = conn.query(query)
    if (result !== undefined) {
      res.json("Resultado de consulta: "+result[0].nombre_cliente)
    }
  } catch {
    /**
     * Parámetros incorrectos en la solicitud
     */
    res.end(JSON.stringify(response400))
  }
  
})

module.exports = router





