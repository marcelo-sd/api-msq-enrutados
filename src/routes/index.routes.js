import {Router} from 'express'

import {ping} from '../controllers/index.controllers.js'

///voy a crear un enrutador a partir dr Router
const router=Router()


router.get('/ping',ping)

export default router