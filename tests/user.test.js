const request = require('supertest')
const app = require('../src/app')


test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Elham',
        email: 'elham@gmail.com',
        password: 'mypass123!'
    }).expect(201)
})