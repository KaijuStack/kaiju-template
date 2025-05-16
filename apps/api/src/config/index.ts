export const isDev = process.env.APP_ENV === 'development';

export const corsDevConfig = {
  credentials: true,
  origin: 'http://localhost:5173',
};

export const postgresConfig = {
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || 'root',
  database: 'kaigen',
  port: 5432,
  ssl:
    !process.env.APP_ENV || isDev
      ? false
      : {
          rejectUnauthorized: false,
        },
};
