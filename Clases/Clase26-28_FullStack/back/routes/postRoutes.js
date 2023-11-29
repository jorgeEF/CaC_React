import express from 'express'
import {getAllPosts} from '../controllers/postController.js'

const router = express.Router();

router.get("/", getAllPosts)
// router.get("/:id", otroControlador)
// router.post("/", otroControlador)
// router.put("/:id", otroControlador)
// router.delete("/:id", otroControlador)

export default router