const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', async (req, res) => {
  console.log(`Event-bus service, recieved type: ${req.body.type}`);
  const event = req.body;
  events.push(event);
  await axios.post('http://backend-srv:4000/events', event);
  await axios.post('http://order-srv:4001/events', event);
  console.log(events);
  res.send({});
});

app.get('/events', (req, res) => {
  console.log(`Event-bus service sending events: ${events}`);
  res.send(events);
});

app.listen(4003, () => {
  console.log('event-bus listening on 4003');
});
