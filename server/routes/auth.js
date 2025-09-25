import express from "express";
import multer from "multer"
import { checkLogin, signin, signup} from "../controllers/auth.js";
const authRouter=express.Router();

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "public/profilePic");
    },
    filename:function (req,file,cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload=multer({storage:storage})

authRouter.post("/signin",signin);
authRouter.post("/signup",upload.single("profilePicture"),signup);
authRouter.post("/checkLogin",checkLogin);

export default authRouter;