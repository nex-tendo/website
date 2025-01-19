const { createLogger, format, transports } = require('winston');
const colors = require('colors');
const moment = require('moment');

colors.setTheme({
  info: 'blue',
  warn: 'yellow',
  error: 'red',
  success: 'green',
});

const customFormat = format.combine(
  format.timestamp({
    format: () => moment().format('YYYY-MM-DD HH:mm:ss'),
  }),
  format.printf(({ timestamp, level, message }) => {
    let coloredMessage;
    switch (level) {
      case 'info':
        coloredMessage = message.info;
        break;
      case 'warn':
        coloredMessage = message.warn;
        break;
      case 'error':
        coloredMessage = message.error;
        break;
      case 'success':
        coloredMessage = message.success;
        break;
      default:
        coloredMessage = message;
    }
    return `[${timestamp}] [${level.toUpperCase()}] ${coloredMessage}`;
  })
);

const logger = createLogger({
  level: 'info',
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    success: 3,
  },
  format: customFormat,
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

logger.success = (message) => {
  logger.log({ level: 'success', message });
};

module.exports = logger;