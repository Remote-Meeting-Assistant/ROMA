const studentDB = require('../models/studentModel');
const classroomDB = require('../models/classroomModel');

const studentController = {};

studentController.addStudent = (req, res, next) => {
  console.log('studentController.addStudent Request Body: ', req.body);
  const { firstName, lastName, classroomID } = req.body;
  const queryText = `INSERT INTO students (firstName, lastName, classroomID) VALUES (${firstName}, ${lastName}, ${classroomID})`;
  studentDB.query(queryText, [firstName, lastName, classroomID], (err) => { 
    if(err) {
      console.log('studentController.addStudent encountered an error:', err);
    }
  });
  return next();
};

module.exports = studentController;