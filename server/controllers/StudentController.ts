import studentDB  from '../utils/pool';
import {Request, Response, NextFunction} from 'express';
import type { StudentController, Student } from '../../types/serverTypes';
import type { QueryResult } from 'pg';



// *** ALL QUERIES CURRENTLY ASSUME STUDENT TABLE TO BE LABELED 'students' and CLASSROOM TABLE TO BE LABELED 'classrooms' ***
export const studentController: StudentController = {
  getStudents: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Query database for list of students
      const result: any = await studentDB.query('SELECT * FROM "public"."students"');
      const rows: Student[] = result.rows;
      res.locals.students = rows;
      return next();
    }
    catch (err) {
      return next({err: 'Error occured at studentController.getStudents when attempting to query for list of students'})
    }
  },

  addStudent: async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, classroomID, claps, beenCalled } = req.body;
    const params = [firstName, lastName, classroomID, claps, beenCalled];
    console.log('studentController.addStudent adding:', firstName, lastName, classroomID);
    const queryText = `INSERT INTO "public"."students" (first_name, last_name, classroomID, claps, beenCalled) VALUES ($1, $2, $3, $4, $5)`;
    const result: any = await studentDB.query(queryText, params);
    res.locals.newStudent = result.rows;
    return next();
  }
  catch (err){ 
    return next({err: 'studentController.addStudent encountered an error:'});
  }
},

deleteStudent: async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, classroomID } = req.body;
    const params = [firstName, lastName, classroomID]
    const queryText = `DELETE FROM "public"."students" WHERE first_name = $1 AND last_name = $2 AND classroomID = $3`;
    console.log('studentController.deleteStudent encountered an error:');
    const result: any = await studentDB.query(queryText, params);
    res.locals.deleteStudent = result.rows;
    return next();
  }
  catch (err){
    return next({err: 'studentController.deleteStudent encountered an error:'});
  }
},

addClap: async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { claps, firstName, lastName, classroomID, } = req.body;
    const queryText = `UPDATE "public"."students" SET claps = $1 WHERE first_name = $2 AND last_name = $3 AND classroomID = $4`;
    const result: any = studentDB.query(queryText, [claps + 1, firstName, lastName, classroomID]);
    res.locals.updatedStudent = result.rows;
    return next();
  }
  catch (err) {
    return next({err: 'studentController.deleteStudent encountered an error:'});
  }
}
}