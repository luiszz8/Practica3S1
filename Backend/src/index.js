import app from "./app.js";
import "./database.js";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser"

app.use(express.json());
app.use(bodyParser.json())
// Configurar CORS con opciones personalizadas
app.use(cors());
app.listen(3001);
console.log("Server on port", 3001);
