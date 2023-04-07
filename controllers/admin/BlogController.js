const { findByIdAndUpdate } = require("../../models/Blog");
const BlogModel = require("../../models/Blog");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "djthe7kug",
  api_key: "596173756596164",
  api_secret: "RD6z6UGekdhiA1D1vMdAi5i-66I",
  // secure: true
});

class BlogController {
  static display = async (req, res) => {
    try {
      const data = await BlogModel.find();

      // console.log(data)
      res.render("admin/Blog/display", { d: data });
    } catch (err) {
      console.log(err);
    }
  };
  static bloginsert = async (req, res) => {
    // console.log(req.body)
    // console.log(req.files.image)

    const imagefile = req.files.image;
    const myimage = await cloudinary.uploader.upload(imagefile.tempFilePath, {
      folder: "blogimage",
    });
    // console.log(myimage)

    // const result =await BlogModel.create(req.body)
    // res.redirect('/admin/blogdisplay')  // in redirect data will come from route
    const result = new BlogModel({
      title: req.body.title,
      description: req.body.description,
      image: {
        public_id: myimage.public_id,
        url: myimage.secure_url,
      },
    });
    await result.save();
    res.redirect("/admin/blogdisplay");
  };
  static blogview = async (req, res) => {
    try {
      // console.log(req.params.id)
      const result = await BlogModel.findById(req.params.id);
      // console.log(result)
      res.render("admin/blog/view", { view: result });
    } catch (err) {
      console.log(err);
    }
  };

  static blogedit = async (req, res) => {
    try {
      // console.log(req.params.id)
      const result = await BlogModel.findById(req.params.id);
      // console.log(result)
      res.render("admin/blog/edit", { edit: result });
    } catch (err) {
      console.log(err);
    }
  };

  static blogupdate = async (req, res) => {
    try {
      if (req.files) {
        const data = await BlogModel.findById(req.params.id);
        const image_id = data.image.public_id;
        console.log(data);
        await cloudinary.uploader.destroy(image_id);
        console.log(image_id);

        //   image update code
        const imagefile = req.files.image;
        const myimage = await cloudinary.uploader.upload(
          imagefile.tempFilePath,
          {
            folder: "blogimage",
          });
        

      var  imgdata = {
            title: req.body.title,
            description: req.body.description,
            image: {
              public_id: myimage.public_id,
              url: myimage.secure_url,
            },
          };

        
      } else {
      var  imgdata = {
            title: req.body.title,
            description: req.body.description,
            
            
        };

        }
       
      
      // console.log(req.body)
      // console.log(re.params.id)

      //image delete code

      

      const result = await BlogModel.findByIdAndDelete(req.params.id,imgdata);

      await result.save() ;
      res.redirect("/admin/blogdisplay");
    }
     catch (err) {
        console.log(err);
      }
    };
      
     

  static blogdelete = async (req, res) => {
    try {
      const data = await BlogModel.findById(req.params.id);
      const image_id = data.image.public_id;
      await cloudinary.uploader.destroy(image_id);
      // console.log(req.params.id)
      const result = await BlogModel.findByIdAndDelete(req.params.id);
      // console.log(result)
      res.redirect("/admin/blogdisplay");
    } catch (err) {
      console.log(err);
    }
  };


} 
module.exports = BlogController
