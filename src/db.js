import {createPool} from 'mysql2/promise'
//aqui le digo que utilice a mysql como promesas
//createconccion es como un solo hiloo de coneccion
//es un conjunto de conecciones que podemos usar

 import { DB_HOST, 
   DB_PASSWORD, 
    DB_DATEBASE, 
     DB_USER,
    DB_PORT } from './configuracion.js' 

export const pool=createPool({
    //estas son credenciales de base de datos

host:DB_HOST,
user: DB_USER,
password:DB_PASSWORD,
port: DB_PORT,
database:DB_DATEBASE

/* host:'localhost',
user: 'root',
password:'0000',
port: 3306,
database:'compañidb' */

})

/* este archivo es pra conctaros a myswql */
// pool es un nombre aleatorio de una variable que va a contener a createpool
//cunado quieramos hacer una consulta solo debemos llamar a pool.query('aqui va la consulta sql')