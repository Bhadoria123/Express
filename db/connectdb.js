const mongoose = require('mongoose')
const url ='mongodb://127.0.0.1:27017/BlogWebsite'

// const url ="mongodb+srv://Viveksingh01:Vivek123@cluster0.fbopcis.mongodb.net/BlogWebsite?retryWrites=true&w=majority"
const live_Url = "mongodb+srv://viveksinghbhadoria01:Vivek12@cluster0.h965ezf.mongodb.net/Blog?retryWrites=true&w=majority"
const connectdb = () => {
    return mongoose.connect(live_Url)
    // return mongoose.connect('mongodb://127.0.0.1:27017/BlogWebsite')
    // return mongoose.connect(url)
        .then(() => {
            console.log('connection sucessfully')
        })
        .catch((error)=>{
            console.log(error)

        })

}
module.exports=connectdb