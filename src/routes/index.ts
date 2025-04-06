import express from "express";
import {
    getAllSite,
    getSite,
    createSite,
    updateSite,
    deleteSite
} from "../controllers/SiteController";

const router = express.Router();

router.get("/site", getAllSite);
router.get("/site/:id", getSite);
router.post("/site", createSite);
router.put("/site/:id", updateSite);
router.delete("/site/:id", deleteSite);

export default router;