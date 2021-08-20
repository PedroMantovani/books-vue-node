const express = require('express');

const Livros = require('../models/livros');

const router = express.Router();

router.get('/', async (req, res) => {
    try {

        const listBook = await Livros.find()

        return res.status(200).send({ listBook })

    } catch (error) {
        return res.status(400).send({ error: 'Error finding book' })
    }
})

router.post('/', async (req, res) => {
    try {
        // to do - passa o usuario com populate (igaul no groupcontroller)

        const book = await Livros.create({ ...req.body })

        return res.send({ book })

    } catch (error) {
        return res.status(400).send({ error: 'Error creating book' })
    }
})

router.put('/:livroId', async (req, res) => {
    try {
        const id = req.params.livroId
        const update = req.body

        const book = await Livros.findByIdAndUpdate(id , update)

        return res.send({ book })

    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})

router.delete('/:livroId', async (req, res) => {
    try {

        await Livros.findByIdAndRemove(req.params.livroId)

        return res.status(200).send({ message: 'Book deleted' })

    } catch (error) {
        return res.status(400).send({ error: 'Error to delete book' })
    }
})


module.exports = app => app.use('/livro', router);