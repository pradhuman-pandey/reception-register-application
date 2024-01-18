import mongoose from 'mongoose';
import supertest from 'supertest';

import {getRequestListener} from '../src/cli/bootstrap';
import {User} from '../src/models';
import {MONGODB_URI} from '../src/settings';
import {generateKey} from '../src/utilities/token';

const request = supertest(getRequestListener());

const ROOT_URL = '/api/v1/register';
const KEYWORD = 'Token';
const EMAIL = 'register.testuser@email.com';
const CREDENTIALS = {email: EMAIL, password: 'foobarbaz'};

describe('Register API Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(MONGODB_URI);
    await User.create({
      ...CREDENTIALS,
      firstName: 'Register',
      lastName: 'Test User',
      token: {key: generateKey()},
    });
  });

  afterAll(async () => {
    await User.deleteOne({email: EMAIL});
    await mongoose.connection.close();
  });

  describe(`GET ${ROOT_URL}/entries`, () => {
    it('List Entries', async () => {
      const user = await User.findOne({email: EMAIL});
      const response = await request
          .get(`${ROOT_URL}/entries`)
          .set('Authorization', `${KEYWORD} ${user.token.key}`);
      expect(response.status).toBe(200);
    });
  });

  describe(`POST ${ROOT_URL}/entries`, () => {
    it('Create Entry', async () => {
      const user = await User.findOne({email: EMAIL});
      const payload = {
        name: 'Rithvik Sharma',
        company: 'Apple',
        personToMeet: 'Amogh Madan',
        mobile: 1122334455,
        purpose: 'Develop Application',
        in: new Date().toISOString(),
        sign: 'Attended',
        out: new Date().toISOString(),
        securitySign: 'Kapil',
        remarks: 'Some remarks',
      };

      const response = await request
          .post(`${ROOT_URL}/entries`)
          .send(payload)
          .set('Authorization', `${KEYWORD} ${user.token.key}`);
      expect(response.status).toBe(201);
    });
  });
});
