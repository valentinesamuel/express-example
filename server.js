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
    {
        id: 5,
        name: "Mike Adams"
    },
    {
        id: 6,
        name: "Jordan Nichols"
    },
    {
        id: 7,
        name: "Kathryn Rodriquez"
    },
    {
        id: 8,
        name: "Wesley Jensen"
    },
    {
        id: 9,
        name: "Caleb Cross"
    },
    {
        id: 10,
        name: "Jennie Bridges"
    },
]
app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log({ 'method': req.method, 'url': req.url, "timeTaken": `${delta}ms` })
})
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello')
})
app.post('/friends', (req, res) => {
    if (!req.body.name) {
        res.status(400).json({
            error: 'Missing friend name'
        })
    }

    const newFriend = {
        id:FRIENDS.length + 1,
        name: req.body.name
    }
    FRIENDS.push(newFriend)
    res.json(newFriend)
})
app.get('/friends', (req, res) => {
    res.json(FRIENDS)
})




app.get('/friends/:id', (req, res) => {
    const friendId = Number(req.params.id)
    const friend = FRIENDS[friendId]
    if (friend) {
        res.json(friend)
    } else {
        res.status(404).json({
            error: "Friend do not exist"
        })
    }
})

app.post('/messages', (req, res) => {
    console.log('updating msgs')
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`)
})