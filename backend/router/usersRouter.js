import express from "express";
import { studentSignIn, teacherSignIn } from "../controllers/usersController.js";
import { adminSignIn } from "../controllers/usersController.js";


const router = express.Router();

router.post('/student/signin', studentSignIn);
router.post('/teacher/signin', teacherSignIn);
router.post('/admin/signin', adminSignIn);

export default router;
 
