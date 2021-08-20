const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.get('/:email', async (req, res) => {
    try {

        const listUser = await User.findOne({ email: req.params.email})

        return res.status(200).send({ listUser })

    } catch (error) {
        return res.status(400).send({ error: 'Error info photo' })
    }
})

router.post('/', async (req, res) => {
    try {
        
        const insert = await User.create({ ...req.body })
        
        return res.send({ insert })

    } catch (error) {
        return res.status(400).send({ error: 'Error creating user' })
    }
})

router.put('/:res_id', async (req, res) => {
    try {
        const id = req.params._id
        const update = req.body

        const up = await User.findByIdAndUpdate(id, update)

        return res.send({ up })

    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})

module.exports = app => app.use('/register', router);