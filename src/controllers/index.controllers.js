 
 import {pool} from '../db.js'
 
 export const ping= async(req,res)=>{
    const [resultado]=  await pool.query('select "pong" as resultado')
    res.json(resultado[0])
  }