const logger = require('node-color-log')
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hi there!')

    logger.bgColor('green')
        .color('white')
        .log('Hello, ' + process.env.NAME);
})

app.listen(port, () => {
    console.log('Listening has started')
})
