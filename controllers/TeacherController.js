class TeacherController{

    static display=(req,res)=>{
        res.send('displayteacher')
    }

    static view=(req,res)=>{
        res.send('viewteacher')
    }

    static edit=(req,res)=>{
        res.send('editteacher')
    }

    static delete=(req,res)=>{
        res.send('deleteteacher')
    }




}
module.exports=TeacherController