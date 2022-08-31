const express = require('express')
const app = express()
const PORT = 3000

const FRIENDS = [
    {
        id: 1,
        name: "Charlie Lane"
    },
    {
        id: 2,
        name: "Lettie Jordan"
    },
    {
        id: 3,
        name: "Stanley Joseph"
    },
    {
        id: 4,
        name: "Thomas Jimenez"
    },
]

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/friends/:id', (req, res) => {
    const friendId = Number(req.params.id)
    const friend = FRIENDS[friendId]
    if (friend) {
        res.json(friend)
    } else {
        res.status(404).json({
            error:"Friend do not exist"
        })
    }
})

app.get('/friends', (req, res) => {
    res.json(FRIENDS)
})

app.post('/messages', (req, res) => {
    console.log('updating msgs')
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`)
})