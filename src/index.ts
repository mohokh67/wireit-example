import express, { Express, Request, Response } from 'express';
import pino from 'pino-http'
import { createUser } from './utils/helper'

const logger = pino()

const app: Express = express();
const port = 8000;

app.use(logger)

app.get('/ping', (req: Request, res: Response) => {
  // logger(req, res);

  req.log.info('GET /ping was called')

  res.send('pong!');
});

app.post('/user', async(req: Request, res: Response) => {
  // logger(req, res)
  req.log.info('POST /user was called')
  await createUser()

  res.status(201).send('user created');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});