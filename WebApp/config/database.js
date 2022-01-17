

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'devnt2'),
      user: env('DATABASE_USERNAME', 'bob'),
      password: env('DATABASE_PASSWORD', 'admin'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
