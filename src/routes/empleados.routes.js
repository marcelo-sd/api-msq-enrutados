import { Router } from "express";
//router es para que podamos crear todo una seccion de rutas
import { getEmpleados, crearEmpleados, actualizarEmpleado,eliminarEmpleado,getEmpleado } from "../controllers/empleados.controllers.js";


const router = Router();
//router tiene todos los metodos get post delete put

router.get("/empleados", getEmpleados);

//el id es un parametro para identificar el empleado en singular
router.get("/empleados/:id", getEmpleado);

router.post("/empleados", crearEmpleados);

router.put("/empleados", actualizarEmpleado);

router.delete("/empleados", eliminarEmpleado);

export default router;
