import express, {Request, Response, NextFunction, Application} from 'express';
import path from 'path';
import studentsRouter from './routes/students';
import { ServerError }  from'../types/serverTypes';
const app: Application = express();
const PORT: number = 3000;

// Route handler for parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all files when built with webpack
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// Serve all static files
app.use(express.static('client'));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// Router for requests to database
app.use('/students', studentsRouter);

// Global error handler handler for unknown requests
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

// Global middleware error handler
app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
  // Default err object
  const defaultErr: ServerError = {
    log: 'express caught unknown middleware error',
    status: 500,
    message: {err: 'an error occured'}
  };
  const error: ServerError = Object.assign(defaultErr, err);
  res.status(err.status).send(err.message);
});

app.listen(PORT);