const path = require('path');
const logPath = path.join(__dirname, '../../logs/development.log');

module.exports = {
  web: {
    port: 3000
  },
  logging: {
    appenders: {
      console: { type: 'console' },
      cheeseLogs: { type: 'file', filename: logPath }
    },
    categories: {
      cheese: { appenders: ['cheeseLogs'], level: 'error' },
      another: { appenders: ['console'], level: 'trace' },
      default: { appenders: ['console', 'cheeseLogs'], level: 'trace' }
    }
  }
};
