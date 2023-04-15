const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express ();

app.use(cors());

app.get('/users', async (req, res) => {
	try {
	  const response = await axios.get('https://api.github.com/users');
	  const users = response.data;
	  res.send(users);
	} catch (err) {
	  console.error(err);
	  res.status(500).send("Couldn't find the users list.");
	}
});

app.listen(3001, () => {
	console.log("Server running (3001)...");
});