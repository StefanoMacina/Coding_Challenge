const getAllUsers = (req, res) => {
    return res.status(200).json({message : 'hello'})
}

const getUserById = (req, res) => {
    const _id = req.params.id
    return res.status(200).json({_id})
}


module.exports = { 
    getAllUsers,
    getUserById

}