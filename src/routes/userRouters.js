import express from "express";
import { getAllUsers, getuserid, updateusers } from "../controller/usercontrollers.js";
import { createUser } from "../controller/usercontrollers.js";
import { deleteuser } from "../controller/usercontrollers.js";
const router = express.Router();

router.get("/user", getAllUsers);
router.get("/procura/:id", getuserid)
router.post("/newUser", createUser)
router.put("/update/:id", updateusers)
router.delete("/delete/:id", deleteuser)

export default router;