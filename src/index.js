
import app from './app.js'

import{PORT} from './configuracion.js'


app.listen(PORT)
/* en este punto ya hay un servidor escuchando */
console.log('servidor corriendo en puerto', PORT)


