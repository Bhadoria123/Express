const express = require('express')
const AdminController = require('./controllers/admin/AdminController')
const BlogController = require('./controllers/admin/BlogController')
const FrontController = require('./controllers/FrontController')
const TeacherController = require('./controllers/TeacherController')
const app = express()
const port = 3000
// console.log(app)

//used for static files
app.use(express.static('public'))


//template engine setup
app.set('view engine', 'ejs')



//create route
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })


app.get('/',FrontController.home)
app.get('/about',FrontController.about)
app.get('/blog',FrontController.blog)
app.get('/contact',FrontController.contact)
app.get('/login',FrontController.login)

//TeacherController

app.get('/teacher/display',TeacherController.display)
app.get('/teacher/view',TeacherController.view)
app.get('/teacher/edit',TeacherController.edit)
app.get('/teacher/delete',TeacherController.delete)


//AdminController
app.get('/admin/dashboard',AdminController.dashboard)


//Admin/BlogController
app.get('/admin/blogdisplay',BlogController.display)








  




//server create
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })