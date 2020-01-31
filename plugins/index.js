const path = require('path');
module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, args) => {
    if (browser.name === "chrome") {
      args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
      args.push("--load-extension=cypress/extensions/ignore-x-frame-headers");
      return args;
    }
  });
};