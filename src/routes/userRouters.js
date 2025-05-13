import express from "express";
import { getAllUsers, getuserid, login, registreuse, updateusers } from "../controller/usercontrollers.js";
import { createUser } from "../controller/usercontrollers.js";
import { deleteuser } from "../controller/usercontrollers.js";
import { createuserschemas, loginschema, updateuserSchema } from "../schemas/userschemas.js";
import { validate } from "../middleware/validate.js"
import { authenticate } from "../middleware/authentication.js";
const router = express.Router();

router.get("/user", getAllUsers);
router.get("/procura/:id", getuserid)
router.post("/newUser", validate(createuserschemas), createUser)
router.put("/update/:id",authenticate, validate(updateuserSchema),updateusers)
router.delete("/delete/:id", authenticate, deleteuser)
router.post("/registro", registreuse)
router.post("/login", validate(loginschema), login)

export default router;