const {v1: uuidv1} = require('uuid');
const express = require ('express')
const app = express()
const port = 3000
const DB_USERS = []

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/users', (req, res) => {
    res.json(DB_USERS)
})
app.get('/posts', (req, res) => {
    res.json(DB_USERS)
})


app.post('/users', (req, res) => {
    req.body.userId = uuidv1()
    DB_USERS.push(req.body)
    res.status(201).send({userId: req.body.userId, mesagge: 'RECURSO CREADO'})
})
app.post('/posts', (req, res) => {
    req.body.userId = uuidv1()
    req.body.postId = uuidv1()
    DB_USERS.push(req.body)
    res.status(201).send({postId: req.body.postId, mesagge: 'RECURSO CREADO'})
})


app.put('/users/userId', (req, res) => {
    const {body} = req.body
    DB_USERS.find((obj, i) => {
        if (obj.id === req.params.userId){
            body.userId = req.params.userId
            DB_USERS[i] = body
            return
        }
    })
    
    
    res.send('Hola mundo! El básico PUT')
})
app.patch('/', (req, res) => {
    res.send('Hola mundo! El básico PATCH')
})
app.delete('/', (req, res) => {
    res.send('Hola mundo! El básico DELETE')
})


const server = app.listen(3000, () =>
console.log('Server ready', port))