import {config} from 'dotenv'
config()





//a partir de aqui ya estoy leyendo variables de entorno
/* console.log(process.env.PORT)
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DATEBASE) */

export const PORT =process.env.PORT||3000


export const DB_USER=process.env.DB_USER||'root'
export const DB_PASSWORD=process.env.DB_PASSWORD||'0000'
export const DB_HOST=process.env.DB_HOST||'localhost'
export const DB_DATEBASE=process.env.DB_DATEBASE||'compañidb'
export const DB_PORT=process.env.DB_PORT||3306


/* esta es la forma de leer variables */