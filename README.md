# Cypress-XFrames-Extension
a Chrome plugin to allow cypress to strip x-frame-headers 

I've run into issues where an OAuth page will not render for Cypress because of an X-Frame-Headers security setting:
 `Refused to display 'https://[website]' in a frame because an ancestor violates the following Content Security Policy directive: "frame-ancestors 'self'` 


Simply setting the chromeWebSecurity: false flag in the `cypress.json` does not allow the page to render because it is not simply a CORS issue.  I have to override the `Security Policy directive: "frame-ancestors 'self'`.


This plugin will be installed in Chrome on broser launch, and then strip any of those headers.  Hopefully, it will become unnessesary in the future, but it may be useful for others when testing with Cypress.
