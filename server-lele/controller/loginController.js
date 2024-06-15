// const User = require('../model/userModel');

// const showLogin = (req, res) => {
//     res.render('login');
// };

// const processLogin = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (user && user.password === password) {
//             // Store user info in session
//             req.session.user = user;
//             res.redirect('/dashboard');
//         } else {
//             res.redirect('/?error=Invalid%20credentials');
//         }
//     } catch (error) {
//         res.status(500).send('Internal Server Error');
//     }
// };

// module.exports = {
//     showLogin,
//     processLogin
// };
