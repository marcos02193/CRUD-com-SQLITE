import express from "express";
import { getAllUsers, getuserid, updateusers } from "../controller/usercontrollers.js";
import { createUser } from "../controller/usercontrollers.js";
import { deleteuser } from "../controller/usercontrollers.js";
import { createuserschemas, updateuserSchema } from "../schemas/userschemas.js";
import { validate } from "../middleware/validate.js"
const router = express.Router();

router.get("/user", getAllUsers);
router.get("/procura/:id", getuserid)
router.post("/newUser", validate(createuserschemas), createUser)
router.put("/update/:id", validate(updateuserSchema),updateusers)
router.delete("/delete/:id", deleteuser)

export default router;