import type {Knex} from 'knex';

import dot from 'dotenv';
import { env } from 'process';
import fs from 'fs';

dot.config();
// Update with your config settings.

const config: {[key: string]: Knex.Config} = {
  development: {
    client: 'mysql2',
    connection: {
      host:env.host,
      database: env.database,
      user: env.username,
      password: env.password,
      ssl:{
        rejectUnauthorized: false,
        // ca: fs.readFileSync(env.DB_ROOT_CERT as fs.PathLike), // e.g., '/path/to/my/server-ca.pem'
        // key: fs.readFileSync(env.DB_KEY as fs.PathLike), // e.g. '/path/to/my/client-key.pem'
        cert: fs.readFileSync(env.DB_CERT as fs.PathLike), // e.g. '/path/to/my/client-cert.pem'
      }
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },

    seeds: {
      directory: './db/seed',
    },
  },

  staging: {
    client: 'mysql2',
    connection: {
      host:env.host,
      database: env.database,
      user: env.user,
      password: env.password,
      ssl:true
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },

    seeds: {
      directory: './db/seed',
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host:env.host,
      database: env.database,
      user: env.user,
      password: env.password,
      ssl:true
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },

    seeds: {
      directory: './db/seed',
    },
  },
};

module.exports = config;
