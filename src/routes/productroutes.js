import express from "express"
import { productdeleted, productget, productgetid, productpost, productput } from "../controller/productcontroller.js"
import { validateproduct } from "../middleware/validaproduct.js";
import {createproductschema} from "../schemas/productschema.js"
const router = express.Router();

router.get("/productall", productget)
router.post("/productcreate", validateproduct(createproductschema), productpost)
router.get("/productsearch/:id", productgetid)
router.put("/productupdate/:id", productput)
router.delete("/productdeleted/:id", productdeleted)







export default router