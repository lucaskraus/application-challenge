const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const app = express();

//GitHub Key - Expires May 16.
const GITHUB_PAT = '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';

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));

//API query to get users from Github.
app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/users');
    const users = response.data;
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Couldn't find the users list.");
  }
});

//API query to get details from an specific user.
app.get('/api/users/:username/details', async (req, res) => {
  const username = req.params.username;

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_PAT}`,
      },
    });
    const userData = response.data;
    res.send(userData);

  } catch (err){
    console.log(err);
    res.status(500).send("Couldn't find the user details.");
  }
});

//API query to get the repositories from an specific user.
app.get('/api/users/:username/repos', async (req, res) => {
  const username = req.params.username;

  try{
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${GITHUB_PAT}`,
      },
    });
    const userData = response.data;
    res.send(userData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Couldn't find the user's repositories.");
  }
});

app.listen(3001, () => {
  console.log("Server running (3001)...");
});
