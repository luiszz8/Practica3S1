import express from "express";
import { pool } from "./database.js";
import cors from "cors";
import bodyParser from "body-parser"


const app = express();
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());


app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const [user] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

    if (user.length === 1) {
      if(user[0].password==password){
        return res.status(200).json({ ok: 'Usuario logueado' });
      }else{
        return res.status(200).json({ error: 'Error en credenciales' });
      }
    } else {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
});

export default app;
