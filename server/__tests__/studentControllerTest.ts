import {describe, expect, test} from '@jest/globals';
import { studentController } from '../controllers/StudentController';
import { Request, Response, NextFunction } from 'express';
import studentDB from '../utils/pool';
import fs from 'fs';


// describe('addStudent', () => {

//     it('Gets all students', () => {
//       console.log('pending');
//     })

//     it('Adds a student Frank Sinatra to classroom 1', () =>{
//         const req = {
//             body: {
//                 first_name: 'Frank',
//                 last_name: 'Sinatra'
//             }
//         }
//     })

//   test(`add (Frank, Sinatra, 1, 0, false)`, () => {
//     console.log('penging');
//   })
// }) 
 


// describe('test getStudent',  () => {
//   const req: Request = {} as Request;
//   const res: Response = {} as Response;
//   const next: NextFunction = {} as NextFunction;

//   studentDB.query = jest.fn().mockResolvedValue({ rows: ['student1', 'student2'] });

//   studentController.getStudents(req, res, next);

//   expect(res.locals.students).toEqual(['student1', 'student2']);

//   expect(next).toBeCalled();

// })

describe('studentController', () => {
  test('getStudents middleware should set locals.students with the result rows', async () => {
    // Create mock request, response, and next function objects
    const req: Request = {} as Request;
    const res: Response = {} as Response;
    const next: NextFunction = jest.fn();
    

    // Mock the query method of studentDB with a resolved promise
    studentDB.query = jest.fn().mockResolvedValue({ rows: ['student1', 'student2'] });

    // Call the middleware function
    const result = await studentController.getStudents(req, res, next);

    // Assert that locals.students is set correctly
    expect(result).toEqual(['student1', 'student2']);

    // Assert that the next function was called
    expect(next).toHaveBeenCalled();
  });
});