import express, { Router, Request, Response } from'express';
const router: Router = express.Router();
import { studentController } from '../controllers/StudentController';

// Queries DB for list of students and responds with json object
router.get('/',
  studentController.getStudents,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.students);
  }
);

router.post('/',
  studentController.addStudent,
  (req: Request, res: Response) => {
    res.status(201).json(res.locals.newStudent);
  }
)

router.delete('/',
  studentController.deleteStudent,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.deleteStudent);
  }
)

export default router;