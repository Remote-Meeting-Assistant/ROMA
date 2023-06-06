const studentDB = require('../models/studentModel');
const classroomDB = require('../models/classroomModel');

const studentController = {};

// *** ALL QUERIES CURRENTLY ASSUME STUDENT TABLE TO BE LABELED 'students' and CLASSROOM TABLE TO BE LABELED 'classrooms' ***

studentController.addStudent = (req, res, next) => {
  try {
    const { firstName, lastName, classroomID } = req.body;
    console.log('studentController.addStudent adding:', firstName, lastName, classroomID);
    const queryText = `INSERT INTO students (first_name, last_name, classroomID, claps) VALUES (${firstName}, ${lastName}, ${classroomID}, 0)`;
    const result = studentDB.query(queryText, [firstName, lastName, classroomID]);
    return next();
  }
  catch (err){ 
    console.log('studentController.addStudent encountered an error:', err);
  }
};

studentController.deleteStudent = (req, res, next) => {
  try {
  const { firstName, lastName, classroomID } = req.body;
  const queryText = `DELETE FROM students WHERE first_name = ${firstName} AND last_name = ${lastName} AND classroomID = ${classroomID}`;
  studentDB.query(queryText, [firstName, lastName, classroomID]);
  res.locals.deletedStudent = {firstName: firstName, lastName: lastName, classroomID: classroomID};
  return next();
}
catch (err) {
  console.log('studentController.deleteStudent encountered an error:', err);
}
};

studentController.addClap = (req, res, next) => {
  try {
    const { firstName, lastName, classroomID, claps } = req.body;
  const queryText = `UPDATE students SET claps = ${claps + 1} WHERE first_name = ${firstName} AND last_name = ${lastName} AND classroomID = ${classroomID}`;
  studentDB.query(queryText, [firstName, lastName, classroomID]);
  return next();
}
catch (err) {
  console.log('studentController.deleteStudent encountered an error:', err);
}
};

module.exports = studentController;