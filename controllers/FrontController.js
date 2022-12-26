class FrontController{

    static home=(req,res)=>{
        // res.send('homepage')
        res.render('home')
    }

    static about=(req,res)=>{
        // res.send('aboutpage')
        res.render('about')
    }

    static blog=(req,res)=>{
        // res.send('teampage')
        res.render('blog')
    }

    static contact=(req,res)=>{
        // res.send('contactpage')
        res.render('contact')
    }

    static login=(req,res)=>{
        // res.send('contactpage')
        res.render('login')
    }


}

module.exports=FrontController