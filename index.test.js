const request = require('supertest');
const app = require('./index');

describe('Pruebas de la ruta principal', () => {
  it('Debería responder con Status 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Status 200 OK');
  });
});