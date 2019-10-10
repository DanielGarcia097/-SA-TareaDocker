var mysql = require('sync-mysql')

/**
 * Configuración de la conexión a la base de datos
 * Base de datos utilizada: MYSQL
 * La base de datos se encuentra en un contenedor
 * La información de la base de datos se encuentra en un volumen persistente. 
 */

module.exports = () => {
  return new mysql({
    host: process.env.DATABASE_HOST || '0.0.0.0',
    user: 'root',
    password: 'password',
    database: 'clientes'
  })
}
