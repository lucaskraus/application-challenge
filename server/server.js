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

app.get('/api/users/:username/details', async (req, res) => {
	const username = req.params.username;

	try {
		const response = await axios.get(`https://api.github.com/users/${username}`);
		const userData = response.data;
		res.send(userData);

	} catch (err){
		console.log(err);
	}
});

app.get('api/users/:username/repos', async (req, res) => {
	const username = req.username.params;

	try{
		const response = await axios.get(`https://api.github.com/users/${username}/repos`);
		const userData = response.data;
		res.send(userData);
	} catch (err) {
		console.log(err);
	}

});

app.listen(3001, () => {
	console.log("Server running (3001)...");
});