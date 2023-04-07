const CategoryModel = require("../../models/Category")
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'djthe7kug', 
  api_key: '596173756596164', 
  api_secret: 'RD6z6UGekdhiA1D1vMdAi5i-66I',
  // secure: true
});
class CategoryController{
      static display = async(req,res)=>{
        try{
          const data=await CategoryModel.find()

          // console.log(data)
        
        res.render('admin/category/display',{d:data})
      }catch(err){
        console.log(err)
      }
    }




    //Category Insert

      static categoryinsert=async(req,res)=>{
        console.log(req.body)
        // console.log(req.files.image)

        // const imagefile=req.files.image
        // const myimage=await cloudinary.uploader.upload(imagefile.tempFilePath,{
        //     folder:'blogimage'
        // })

        // console.log(myimage)

        const result =await CategoryModel.create(req.body)
        res.redirect('/admin/categorydisplay')  // in redirect data will come from route
    }





    //Category view


    static categoryview=async(req,res)=>{
      try{
          // console.log(req.params.id)
          const result=await CategoryModel.findById(req.params.id)
          // console.log(result)
          res.render('admin/category/view',{view:result})

      }catch(err){
          console.log(err)
      }
  }






  //   Category Update

  static categoryupdate =async(req,res)=>{
    try{
        // console.log(req.body)
        // console.log(re.params.id)
        const result=await CategoryModel.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            description:req.body.description,
        })

        await result.save()
        res.redirect('/admin/categorydisplay')


}catch(err){
    console.log(err)
}
}

// category edit


static categoryedit=async(req,res)=>{
  try{
      // console.log(req.params.id)
      const result=await CategoryModel.findById(req.params.id)
      // console.log(result)
      res.render('admin/category/edit',{edit:result})

  }catch(err){
      console.log(err)
  }
}


static categorydelete=async(req,res)=>{
  try{
      // console.log(req.params.id)
      const result=await CategoryModel.findByIdAndDelete(req.params.id)
      // console.log(result)
      res.redirect('/admin/categorydisplay')


  }catch(err){
      console.log(err)
  }
}









}
module.exports=CategoryController