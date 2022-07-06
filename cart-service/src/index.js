const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const items = [];

app.get('/basket/list', async (req, res) => {
  console.log(`CartService - receiving items. ${JSON.stringify(items)}`);
  res.send(items);
});

app.post('/basket/create', async (req, res) => {
  console.log(`CartService - sending items.`);
  const { name, price, imageUrl } = req.body;
  const itemEvent = {
    type: 'CartItemEvent',
    data: { name, price, imageUrl },
  };
  try {
    await axios.post('http://event-bus-srv:4003/events', itemEvent);
  } catch (e) {
    console.error(e);
  }
  res.send({
    status: 201,
    message: 'item added to cart',
  });
});

app.post('/events', (req, res) => {
  console.log(`CartService - receiving item from bus.`);
  const { data, type } = req.body;
  console.log(JSON.stringify(data));
  if (type === 'CartItemEvent') items.push(data);
  res.send({});
});

app.listen(4000, () => {
  console.log('cart-service listening on 4000');
});
