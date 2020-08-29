class Application {
  constructor({ server, database, logger }) {
    this.server = server;
    this.database = database;
    this.logger = logger;

    if (database && database.options.logging) {
      database.options.logging = logger.info.bind(logger);
    }
  }

  async start() {
    console.log('in app');
    if (this.database) {
      // console.log(this.database.authenticate());
      await this.database.authenticate()
      await this.server.start();
    }
    console.log('inn apppp');
  }
}

module.exports = Application;
