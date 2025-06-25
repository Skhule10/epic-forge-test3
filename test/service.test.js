// Unit tests for the DigitalAssistant service
const cds = require('@sap/cds');

describe('DigitalAssistant Service', () => {
  let srv;
  beforeAll(async () => {
    srv = await cds.connect.to('DigitalAssistant');
  });

  it('should have a Tasks entity', async () => {
    const { Tasks } = srv.entities;
    expect(Tasks).toBeDefined();
  });

  it('should return Tasks data', async () => {
    const tasks = await srv.read('Tasks');
    expect(tasks).toBeInstanceOf(Array);
  });
});