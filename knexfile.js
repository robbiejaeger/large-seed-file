
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/largeseed',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};