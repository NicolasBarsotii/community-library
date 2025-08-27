import express from 'express'
const app = express()

app.use(express.json())

//metodo => GET, POST, PUT/PATCH and DELETE
// NAME => "/" - sempre no plural
// callback function => onde executamos os backend (logica, regra de negocio)
const users = []

app.post("/users", (req, res) => {
    const body = req.body
    users.push(body)
    res.status(201).send('usuario criado com sucesso!')
})

app.get('/users', (req,res) =>{
    res.send({message: 'Esses sao os usuarios!', users})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});