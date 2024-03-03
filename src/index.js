const chalk = require('chalk');

class ColorfulLogger {
  constructor() {
    // Define color mappings
    this.colors = {
      info: 'blue',
      success: 'green',
      warning: 'yellow',
      error: 'red',
    };
  }

  log(message, type = 'info') {
    if (!this.colors[type]) {
      console.error(`Invalid log type: ${type}. Defaulting to 'info'.`);
      type = 'info';
    }

    const coloredMessage = chalk[this.colors[type]](message);
    console.log(`[${type.toUpperCase()}] ${coloredMessage}`);
  }

  // Additional methods can be added for different log types or customizations
  success(message) {
    this.log(message, 'success');
  }

  warning(message) {
    this.log(message, 'warning');
  }

  error(message) {
    this.log(message, 'error');
  }
}

// Export a singleton instance of the logger
module.exports = new ColorfulLogger();

const colorfulLogger = require('colorful-logger');

colorfulLogger.log('This is an informational message.');
colorfulLogger.success('Operation successful!');
colorfulLogger.warning('Proceed with caution!');
colorfulLogger.error('An error occurred.');
