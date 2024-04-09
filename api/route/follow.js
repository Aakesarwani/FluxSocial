import Express from "express";
import { getFollowSuggestions } from "../controllers/follow.js";

const router= Express.Router();

router.get("/userId", getFollowSuggestions);


export default router;