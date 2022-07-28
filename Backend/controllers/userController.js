// Login User

const loginUser = async (req, res) => {
    res.json({mssg: 'login User'})
}


//Signup User

const signupUser = async (req, res) => {
    res.json({mssg: 'signup User'})
}


module.exports = { signupUser, loginUser}