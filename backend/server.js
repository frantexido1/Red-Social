import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


console.log('hola mundo');