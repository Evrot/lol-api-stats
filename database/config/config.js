module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./database/dev.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:",  // in-memory DB for testing
    logging: false
  }
};
