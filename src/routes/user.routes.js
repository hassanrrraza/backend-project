import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router()

router.route("/register").post(
    upload.field([
        {
            name: "avatar",  //when writing the front use same for connection with frontend and backend
            maxCount = 1
        },
        {
            name: "coverImage",
            maxcount:
        } //middleware injection on whichever method is executing
    ]),
    registerUser)

export default router



