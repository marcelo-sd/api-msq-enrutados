
import {pool} from '../db.js'
//nessecitamos pool(objeto) para hacer las consultas

export const getEmpleados=async(req, res) =>{
  const [rows] = await pool.query('SELECT * FROM empleados')
  res.json(rows)


/*     await pool.query('SELECT * FROM empleados' esto me va a devolver filas */
}

export const getEmpleado=async(req,res)=>{
    
 const [filas]=await pool.query('SELECT * FROM empleados WHERE idempleados=?',[req.params.id])

 if (filas.length<=0) res.status(404).json({
    message: 'empleado no encontrado'
 })
/* console.log(filas)  */
res.json(filas[0])




    //podemos obtener los parametros a traves de req ya que vinen po url

    //id:?',[] aqui le voy a decir que valor va a ir en donde esta el signo de pregunta
}



export const crearEmpleados=async (req,res)=>
{
const {nombre,salario}=req.body
//de req.body voy a tomar nombre y salario(osea lo que me envian)
 const [filas]=await pool.query('INSERT INTO empleados (nombre,salario) VALUES(?,?) ', [nombre,salario])

//ponemos filas xq me devuelve un objeto grande y solo queremos la fila

res.send({
    id:filas.insertId,
    nombre,
    salario,
})
}






 export   const actualizarEmpleado=(req,res)=>
        res.send('actualizando empleado')
    

export const eliminarEmpleado=(req,res)=>
    res.send('eliminado empleado')
