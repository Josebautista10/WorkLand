import express from "express";
const router = express.Router();

import * as controller from "../controllers/task";

router.get("/project/:id", controller.getAllTasksForProject);
router.post("/", controller.createTask);
router.patch("/:id", controller.editTask);
router.delete("/:id", controller.deleteTask);

export default router;