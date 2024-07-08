import express from "express";
const router = express.Router();

import * as profileController from "../controllers/profileController.js";

router.route("/").get(profileController.getAll);
router.route("/").post(profileController.add);

export default router;
