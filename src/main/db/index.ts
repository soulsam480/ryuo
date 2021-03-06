import { app } from 'electron';
import { join } from 'path';
import { Connection, createConnection } from 'typeorm';
import entities from './entities';
export function createDb(): Promise<Connection> {
  return createConnection({
    entities: [...entities],
    type: 'sqlite',
    logging: true,
    logger: 'advanced-console',
    synchronize: true,
    database: join(app.getPath('userData'), 'db.sqlite'),
  });
}
