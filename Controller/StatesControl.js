const States = require('../Model/States')

//get all states
exports.getAllStates = async(req, res) => {
    try{
        const getAllStates = await States.find()
        res.json(getAllStates)
    }
    catch (err){
        message: err
    }
}

//get states as per type
exports.getStatesByTypes = async(req, res) => {
    const type = req.body.type
    try{
        const getStatesByTypes = await States.find({ type: type })
        res.json(getStatesByTypes)
    }
    catch (err){
        message: err
    }
}

//search state by name
exports.getStatesByName = async(req, res) => {
    const name = req.body.name
    try{
        const getStatesByName = await States.findOne({ name: name })
        res.json(getStatesByName)
    }
    catch (err){
        message: err
    }
}

//add state
exports.addStates = async(req, res) => {
    const data = new States({
        type: req.body.type,
        name: req.body.name,
        districts: req.body.districts
    })
    try{
        const addStates = await data.save()
        res.json(addStates)
    }
    catch (err){
        message: err
    }
}

//update state
exports.updateStates = async(req, res) => {
    try{
        const data = await States.updateOne(
            { _id: req.params.postId },
            { $set: {
                    type: req.body.type,
                    name: req.body.name,
                    districts: req.body.districts
                }
            }
        )
        res.json(data)
    }
    catch (err){
        message: err
    }
}

//delete state

exports.deleteStates = async(req, res) => {
    try{
        const data = await States.deleteOne({ _id: req.params.postId })
        res.json(data)
    }
    catch (err){
        message: err
    }
}