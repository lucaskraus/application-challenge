const express = require('express');
const axios = require('axios');
const app = express ();

app.use(express.json());

app.get("/")

app.listen(3001, () => {
	console.log("Servidor rodando (3001)...");
});