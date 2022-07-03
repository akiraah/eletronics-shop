const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let orders = [];

app.post('/orders/create', async (req, res) => {
  console.log(`Order service publishing orders.`);
  console.log(`Order service - req.body: ${JSON.stringify(req.body)}`);
  const { items } = req.body;
  await axios.post('http://event-bus-srv:4003/events', {
    type: 'OrdersCreated',
    data: { items },
  });
  res.send({ status: 200, message: 'Order recieved.' });
});

app.get('/orders/list', (req, res) => {
  res.send(orders);
});

app.post('/events', async (req, res) => {
  console.log(`Order service receiving events.`);
  const { type, data } = req.body;
  if (type === 'PublishedOrders') orders = data;
  res.send({});
});

app.listen(4001, () => {
  console.log('order-service listening on 4001');
});
