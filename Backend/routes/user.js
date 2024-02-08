import express from "express";
import { getData } from "../controllers/getData.js";

const router = express.Router();


router.post("/getData", getData)

export default router;