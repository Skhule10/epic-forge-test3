// Entry point for the CAP application
const cds = require('@sap/cds');
cds.on('bootstrap', async (app) => {
  // Use app router for security
  const appRouter = require('@sap/xssec').createSecurityContext;
  app.use(appRouter);
});
module.exports = cds.server;