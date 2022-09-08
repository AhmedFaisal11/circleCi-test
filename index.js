const express = require('express');

const app = express();
const port = 3000;

const users = [
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Ahmed',
        age: 20
    }
];

app.get('/', (req, res) => {
    res.status(200).json({
        message: "hello world"
    });
});

app.get('/users', (req, res) => {
    if (users === null) {
        return res.status(200).json({});
    }
    return res.status(200).json(users);
});

app.listen(port, () => { console.log(`Server is running on port ${port}`); })

module.exports = app;