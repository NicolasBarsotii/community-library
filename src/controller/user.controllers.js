import userServices from '../service/user.services.js'

async function createUSerController (req, res) {
    const newUser = req.body

    try{
        const user = userServices.createUSerService(newUser);
        res.status(201).send({user})
    } catch (err) {
        console.log('Cheguei aqui')
        return res.status(400).send(err.message)
    }
}

export default {
    createUSerController
}