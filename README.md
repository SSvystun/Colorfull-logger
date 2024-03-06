# Colorful Logger

A simple Node.js package for enhancing console logging with colors using the popular `chalk` library.

## Installation

```bash
npm install chalk colorful-logger

const colorfulLogger = require('colorful-logger');

Log an informational message
colorfulLogger.log('This is an informational message.');

Log a success message
colorfulLogger.success('Operation successful!');

Log a warning message
colorfulLogger.warning('Proceed with caution!');

Log an error message
colorfulLogger.error('An error occurred.');

Customization

The logger provides the following log types:

    info (default): Blue
    success: Green
    warning: Yellow
    error: Red

You can customize the colors by modifying the this.colors object in the ColorfulLogger class

Example: 

colorfulLogger.log('Customized message', 'success');
