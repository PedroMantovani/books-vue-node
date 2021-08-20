const express = require('express');
const cloudinary = require('../utils/cloudnary')
const upload = require('../utils/multer')

const User = require('../models/user')

const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
    try {
        
        const result = await cloudinary.uploader.upload(req.file.path)

        // await User.findOneAndUpdate({uid: req.params}, {
        //     avatar: result.secure_url,
        //     cloudinary_id: result.public_id
        // })

        return res.send({ result })

    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})

router.put('/:id', upload.single('image'), async (req, res) => {

    const id = req.params.id

    let userB = await User.findById(id)

    await cloudinary.uploader.destroy(userB.cloudinary_id)

    const result = await cloudinary.uploader.upload(req.file.path)
    const data = {
        avatar: result.secure_url || userB.avatar,
        cloudinary_id: result.public_id || userB.cloudinary_id
    }

    let change = await User.findByIdAndUpdate(req.params.id, data, { new: true })

    return res.send({ change })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {

        let userB = await User.findById(id)

        return res.send({ userB })

    } catch (error) {
        
    }
})

router.delete('/:id', async (req, res) => {
    try {

        let userB = await User.findById({ uid: req.uid })

        await cloudinary.uploader.destroy(userB.cloudinary_id)


    } catch (error) {
        return res.status(400).send({ error: 'Error to delete image' })
    }
})


module.exports = app => app.use('/upload', router);