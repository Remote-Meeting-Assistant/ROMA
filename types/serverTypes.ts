import {Request, Response, NextFunction} from 'express'
import { QueryResult } from 'pg';

export type ServerError = {
  log: string,
  status: number,
  message: {err: string}

}

export type StudentController = {
  getStudents: (req: Request, res: Response, next: NextFunction) => Promise<void>,
  addStudent: (req: Request, res: Response, next: NextFunction) => Promise<void>,
  deleteStudent: (req: Request, res: Response, next: NextFunction) => Promise<void>,
  addClap: (req: Request, res: Response, next: NextFunction) => Promise<void>
}

export type Student = {
  firstName: string | null,
  lastName: string | null,
  classroomID: number,
  claps: number,
  beenCalled: boolean
}

