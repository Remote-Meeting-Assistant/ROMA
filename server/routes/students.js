const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/wesStudentsController');

// Queries DB for list of students and responds with json object
router.get('/',
  studentsController.getStudents,
  (req, res) => {
    res.status(200).json(res.locals.students);
  }
);

router.post('/',
  studentsController.addStudents,
  (req, res) => {
    res.status(201).json(res.locals.newStudent);
  }
)

router.delete('/',
  studentsController.deleteStudent,
  (req, res) => {
    res.status(200).json(res.locals.deleteStudent);
  }
)

module.exports = router;