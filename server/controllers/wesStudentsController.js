// Need to import database
const db = 'IMPORT DATABASE';

module.exports = {

  getStudents: async (req, res, next) => {
    try {
      // Query database for list of students
      const results = await db.query('SELECT * FROM "public"."students"');
      res.locals.students = results.rows;
      return next();
    }
    catch (err) {
      return next({err: 'Error occured at studentController.getStudents when attempting to query for list of students'})
    }
  },

  addStudents: async (req, res, next) => {
    try {
      // Grab student info from req body
      const { firstName, lastName } = req.body;
      // If fields are empty, throw err
      if (!firstName || !lastName) return next({err: 'Missing first and/or last name of student'});
      // Add a new student to database with given name
      const params = [firstName, lastName];
      const query = 'INSERT INTO "public"."students" (first_name, last_name) ($1, $2)';
      const results = await db.query(query, params);
      // Store results in res obj
      res.locals.newStudent = results.rows;
      return next();
    }
    catch (err) {
      return next({err: 'Error occured at studentsController.addStudents when attempting to add student to database'});
    }
  },

  deleteStudent: async (req, res, next) => {
    try {
      // Grab student info
      const { firstName, lastName } = req.body;
      // Throw error if fields are empty
      if (!firstName || !lastName) return next({err: 'Missing first and/or last name of student'});
      // Remove student from database if they exist
      const params = [firstName, lastName];
      const query = 'DELETE FROM "public"."students" WHERE first_name=$1 AND last_name=$2';
      const results = db.query(query, params);
      if (!results.rows.length) return next({err: 'Student not found'});
      res.locals.deleteStudent = results.rows;
      return next();
    }
    catch (err) {
      return next({err: 'Error occured at studentsController.deleteStudent when attemting to remove student from database'})
    }
  }

}