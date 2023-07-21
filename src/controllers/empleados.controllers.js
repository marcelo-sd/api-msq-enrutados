import { pool } from "../db.js";
//nessecitamos pool(objeto) para hacer las consultas

export const getEmpleados = async (req, res) => {
try{
  //throw new Error('BD error')
  //esto es para lanzar un nuevo error
  const [rows] = await pool.query("SELECT * FROM empleados");
  res.json(rows);

  /*     await pool.query('SELECT * FROM empleados' esto me va a devolver filas */
}catch(error){
  return res.status(500).json({message:'algo salio mal'})
}
};

export const getEmpleado = async (req, res) => {
 try{
  const [filas] = await pool.query(
    "SELECT * FROM empleados WHERE idempleados=?",
    [req.params.id]
  );

  if (filas.length <= 0)
    res.status(404).json({
      message: "empleado no encontrado",
    });
  /* console.log(filas)  */
  res.json(filas[0]);
 }catch(error){

 return res.status(500).json({message:'algo salio mal'})
 }

  //podemos obtener los parametros a traves de req ya que vinen por url

  //id:?',[] aqui le voy a decir que valor va a ir en donde esta el signo de pregunta
};

export const crearEmpleados = async (req, res) => {
 try{
  const { nombre, salario } = req.body;
  //de req.body voy a tomar nombre y salario(osea lo que me envian)
  const [filas] = await pool.query(
    "INSERT INTO empleados (nombre,salario) VALUES(?,?) ",
    [nombre, salario]
  );

  //ponemos filas xq me devuelve un objeto grande y solo queremos la fila

  res.send({
    id: filas.insertId,
    nombre,
    salario,
  });
 }catch(error){
  return res.status(500).json({
    message:'algo salio mal'
  })
 }
};







export const eliminarEmpleado = async (req, res) => {
 try{
  const [result] = await pool.query(
    "DELETE  FROM empleados WHERE idempleados=?",
    [req.params.id]
  );


  
if(result.affectedRows <=0)return res.status(404).json({
  message: 'empleado no esncontrado'
})




 console.log(result)

 /*   res.sendStatus(204);  */
  res.send('empleado eliminado')  

  //aqui le vamos a enviar un estado pra que el cliente sepa que se elimino correctamente
 }catch(error){
  return res.status(500).json({
    message:'algo salio mal'
  })
 }
};


export const actualizarEmpleado = async(req, res) =>{
try{
  const {id}=req.params
const{nombre, salario}=req.body


  const result=await pool.query('UPDATE empleados SET nombre=IFNULL(?,nombre) , salario=IFNULL(?,salario) WHERE idempleados=?',[nombre,salario,id])
 
  console.log(result)  

 if(result.affectedRows ===0)return res.status(404).json({
  message:'empleado no encontrado'
})
 


const [filas]=await pool.query('SELECT * FROM empleados WHERE idempleados=?',[id]) 


res.json(filas[0])  
}catch(error){
  return res.status(500).json({
    message:'algo salio mal'
  })
 }
}
 
