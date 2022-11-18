import pino from 'pino'

const logger = pino();

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const createUser = async () :Promise<boolean> => {
  logger.info('creating user!');
  await sleep(2000);
  logger.info('user created!')
  return true
}