

import express from 'express'

//debo poner js por que estoy utilizando modulos
import empleadosRutas from './routes/empleados.routes.js'

import indexRoutes from './routes/index.routes.js'

const app=express()

//antes de que llegues a la ruta es importante
app.use(express.json())
//esto es como decir que primero voy a recibir los datos y los voy a convertir a un objeto de js y luego les voy a pasar a las rutas

app.use(indexRoutes)
app.use('/api/',empleadosRutas)

app.listen(3000)
/* en este punto ya hay un servidor escuchando */
console.log('servidor corriendo en puerto 3000')


