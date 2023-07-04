import {createPool} from 'mysql2/promise'
//aqui le digo que utilic a mysql como promesas
//createconccion es como un solo hiloo de coneccion
//es un conjunto de conecciones que podemos usar

export const pool=createPool({

host:'localhost',
user: 'root',
password:'0000',
port: 3306,
database:'compañidb'

})

/* este archivo es pra conctaros a myswql */
// pool es un nombre aleatorio de una variable que va a contener a createpool
//cunado quieramos hacer una consulta solo debemos llamar a pool.query('aqui va la consulta sql')