const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Welcome to ShopEasy from Anusuya!")
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});