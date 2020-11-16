module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: "./data/car.db3",
      },
  
      useNullAsDefault: true,
  
      migration: {
        directory: "./data/migrations",
      },
  
      seeds: {
        directory: "./data/seeds",
      },
    },
  };