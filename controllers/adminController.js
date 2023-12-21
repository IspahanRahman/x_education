
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

const getAllCourses = (req, res) => {
    try{
        const q = "SELECT * FROM course";
        conn.query(q, (err, result) => {
            if(err) {
                throw err;
            }
            return res.status(200).json(result);
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
const addCourse = (req,res)=>{
    try{
        const {name,description,price,duration,level,topics,schedule} = req.body;
        const q = "INSERT INTO course (name,description,price,duration,level,topics,schedule) VALUES(?,?,?,?,?,?,?)";
        conn.query(q,[name,description,price,duration,level,topics,schedule],(err, result) =>{
            if(err) {
                throw err;
            }
            return res.status(200).json({
                message: "The course has been added successfully"
            });
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const editCourse = (req,res) =>{
    try{
        const {course_id} = req.query;
        const {name,description,price,duration,level,topics,schedule} = req.body;
        const q = "UPDATE course SET name=?,description=?,price=?,duration=?,level=?,topics=?,schedule=? WHERE course_id =?";
        conn.query(q,[name,description,price,duration,level,topics,schedule,course_id],(err, result) =>{
            if(err) {
                throw err;
            }
            return res.status(200).json({
                message: "The course has been edited"
            });
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const courseById = (req,res) =>{
    try{
        const {course_id} = req.query;
        const q = "SELECT * FROM course WHERE course_id=?";
        conn.query(q,[course_id],(err, result) =>{
            if(err) {
                throw err;
            }
            return res.status(200).json({
                message: "Course found",
                data:result
            });
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const deleteCourse = (req,res)=>{
    try{
        const {course_id} = req.query;
        const q = "DELETE FROM course WHERE course_id =?";
        conn.query(q,[course_id],(err, result) =>{
            if(err) {
                throw err;
            }
            return res.status(200).json({
                message: "The course has been deleted successfully"
            });
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}



module.exports = {
    login,
    getAllCourses,
    addCourse,
    editCourse,
    courseById,
    deleteCourse
}
