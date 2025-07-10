const express = require('express');
const router = express.Router();

const carList = [
  { name: 'Maruti Swift', rent: 1200 },
  { name: 'Hyundai i20', rent: 1400 },
  { name: 'Innova', rent: 2500 },
];

router.get('/', (req, res) => {
  res.send(carList);
});

module.exports = router;
