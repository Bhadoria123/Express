const express = require('express')
const AdminController = require('./controllers/admin/AdminController')
const BlogController = require('./controllers/admin/BlogController')
const CategoryController = require('./controllers/admin/CategoryController')
const ContactController = require('./controllers/admin/ContactController')
const FrontController = require('./controllers/FrontController')
const TeacherController = require('./controllers/TeacherController')
const app = express()
const port = 3000
const authentication= require('./middleware/auth')

//get token 
const cookieParser = require('cookie-parser')
app.use(cookieParser())



// console.log(app)
const connectdb = require('./db/connectdb')
//connectiondb
connectdb()



//message show
const session = require('express-session')
const flash = require('connect-flash');



app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));

app.use(flash());
//console.log(express)


//Used to upload images
const fileUpload = require("express-fileupload");
const AboutController = require('./controllers/admin/AboutController')
app.use(fileUpload({useTempFiles: true}));



// to convert data in json form 
app.use(express.urlencoded({extended:false}))


//used for static files
app.use(express.static('public'))


//template engine setup
app.set('view engine', 'ejs')



//create route
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

//Front Controller
app.get('/',FrontController.home)
app.get('/about',FrontController.about)
app.get('/blog',FrontController.blog)
app.get('/contact',FrontController.contact)
app.get('/login',FrontController.login)
app.get('/detail/:id',FrontController.detail)


//TeacherController

app.get('/teacher/display',TeacherController.display)
app.get('/teacher/view',TeacherController.view)
app.get('/teacher/edit',TeacherController.edit)
app.get('/teacher/delete',TeacherController.delete)


//AdminController
app.get('/admin/dashboard',authentication,AdminController.dashboard)
app.post('/bloginsert',BlogController.bloginsert)
app.get('/register',AdminController.register)
app.post('/register1',AdminController.register1)
app.post('/verifylogin',AdminController.verifylogin)
app.get('/logout',AdminController.logout)

//Admin/BlogController
app.get('/admin/blogdisplay',authentication,BlogController.display)
app.get('/blogview/:id',BlogController.blogview)
app.get('/blogedit/:id',BlogController.blogedit)
app.post('/blogupdate/:id',BlogController.blogupdate)
app.get('/blogdelete/:id',BlogController.blogdelete)
app.post('/bloginsert',BlogController.bloginsert)



// admin/categorycontroller
app.get('/admin/categorydisplay',CategoryController.display)
app.post('/categoryinsert',CategoryController.categoryinsert)
app.post('/categoryupdate/:id',CategoryController.categoryupdate)
app.get('/categoryedit/:id',CategoryController.categoryedit)
app.get('/categoryview/:id',CategoryController.categoryview)
app.get('/categorydelete/:id',CategoryController.categorydelete)




// admin/contactcontroller
app.post('/contactinsert',ContactController.contactinsert)
app.get('/admin/contactdisplay',ContactController.display)
app.get('/contactview/:id',authentication,ContactController.contactview)
app.get('/contactedit/:id',authentication,ContactController.contactedit)
app.post('/contactupdate/:id',ContactController.contactupdate)
app.get('/contactdelete/:id',authentication,ContactController.contactdelete)


//admin/AboutController
app.get('/admin/aboutdisplay',authentication,AboutController.display)
app.post('/aboutinsert',AboutController.aboutinsert)
app.get('/aboutview/:id',authentication,AboutController.aboutview)
app.get('/aboutedit/:id',authentication,AboutController.aboutedit)
app.post('/aboutupdate/:id',AboutController.aboutupdate)
app.get('/aboutdelete/:id',authentication,AboutController.aboutdelete)





  




//server create
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })