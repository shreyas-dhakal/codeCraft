import express from "express";
import { 
  getAllSite, 
  getSite, 
  createSite, 
  updateSite, 
  deleteSite 
} from "../controllers/SiteController";
import { upload } from "../middleware/upload";

const router = express.Router();

router.get("/site", getAllSite);
router.get("/site/:id", getSite);
router.post("/site", upload.single("logo"), createSite);
router.put("/site/:id", upload.single("logo"), updateSite);
router.delete("/site/:id", deleteSite);

export default router;
