
const conn = require('../config/database');

const login = async (req,res) =>{
    const {email,password} = req.body; 
    const q= "SELECT *FROM admin WHERE email=?";
    conn.query(q,[email],(err,result)=>{
        if (err){
            console.log(err) ;
            throw err;
        }
        if(password == result[0].password){
            return res.status(200).json({
                message: "Login Successful",
            });
        }else{
            return res.status(422).json({
                message: "Email or Password Incorrect",
            });
        }
    })
}




module.exports = {
    login,

}
