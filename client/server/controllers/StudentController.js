const studentDB = require('../models/studentModel');
const classroomDB = require('../models/classroomModel');

const studentController = {};

// *** ALL QUERIES CURRENTLY ASSUME STUDENT TABLE TO BE LABELED 'students' and CLASSROOM TABLE TO BE LABELED 'classrooms' ***

studentController.addStudent = (req, res, next) => {
  const { firstName, lastName, classroomID } = req.body;
  console.log('studentController.addStudent adding:', firstName, lastName, classroomID);
  const queryText = `INSERT INTO students (firstName, lastName, classroomID) VALUES (${firstName}, ${lastName}, ${classroomID})`;
  studentDB.query(queryText, [firstName, lastName, classroomID], (err) => { 
    if(err) {
      console.log('studentController.addStudent encountered an error:', err);
    }
  });
  return next();
};

studentController.deleteStudent = (req, res, next) => {
  const { firstName, lastName, classroomID } = req.body;
  const queryText = `DELETE FROM students WHERE firstName = ${firstName} AND lastName = ${lastName} AND classroomID = ${classroomID}`;
  studentDB.query(queryText, [firstName, lastName, classroomID], (err) => { 
    if(err) {
      console.log('studentController.deleteStudent encountered an error:', err);
    }
  });
  return next();
}

module.exports = studentController;