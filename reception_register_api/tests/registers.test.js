// import "dotenv/config";
// import mongoose from "mongoose";
// import request from "supertest";
// import {bcrypt} from 'bcryptjs';
// import { getRequestListener } from "../src/cli/bootstrap";
// import { Register, User } from "../src/models";
// import { generateKey } from "../src/utils/token";

// const app = getRequestListener();

// describe("Register API Tests", () =>{
//     beforeAll(async() =>{
//         await mongoose.connect(process.env.MONGO_URI);
//     });

//     afterAll(async () => {
//       await User.deleteMany({});
//       await mongoose.connection.close();
//     });

//     beforeEach(async () => {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash("password", salt);
//       await User.create({
//         email: "test.user@email.com",
//         firstName: "Test",
//         lastName: "User",
//         password: hashedPassword,
//         isActive: true,
//         dateJoined: new Date(),

//       });
//     });

//     afterEach(async () => {
//       await User.deleteMany({});
//     });

//     describe("POST /api/v1/register/", () => {
//         it("Performs Create Register", async () => {
//           const payload = {
//             user:mongoose.Types.ObjectId.toString(),
//             date:new Date(),
//             name:"Rithvik Sharma",
//             company: "Apple",
//             personToMeet: "Amogh Madan",
//             mobile: 1122334455,
//             purpose: "Develop Application",
//             in: new Date(),
//             sign: "Attended",
//             out: new Date(),
//             securitySign: "Kapil",
//             remark:new Date(),
//           };

//           const response = await request(app)
//             .post("/api/v1/register/")
//             .send(payload);
//           expect(response.status).toBe(201);
//         });

//         it("Returns 401 if not authorized", async () => {
//           const response = await request(app).get("/api/v1/register/");
//           expect(response.status).toBe(401);
//       });

// });
// });

// import mongoose from 'mongoose';
// import request from 'supertest';
// import bcrypt from 'bcryptjs';

// import { User, Register } from '../src/models';
// import { getRequestListener } from "../src/cli/bootstrap";
// import { generateKey } from '../src/utils/token';

// const app = getRequestListener();
// // Connect to the test database
// beforeAll(async () => {
//   await mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// });

// // Close the database connection after all tests are complete
// afterAll(async () => {
//   await mongoose.connection.close();
// });

// // Clear the User and Register collections before each test
// beforeEach(async () => {
//   await User.deleteMany({});
//   await Register.deleteMany({});
// });

// describe('Register API Tests', () => {
//   describe('POST /api/v1/register/', () => {
//     it('Performs Create Register', async () => {
//       // Create a test user
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash('password', salt);
//       const user = await User.create({
//         email: 'test@example.com',
//         firstName: 'Test',
//         lastName: 'User',
//         password: hashedPassword,
//         isActive: true,
//         dateJoined: new Date(),
//       });

//       // Create a payload for the register
//       const payload = {
//         user: user._id.toString(), // Use the user's ObjectId as a string
//         date: new Date(),
//         name: 'Rithvik Sharma',
//         company: 'Apple',
//         personToMeet: 'Amogh Madan',
//         mobile: 1122334455,
//         purpose: 'Develop Application',
//         in: new Date(),
//         sign: 'Attended',
//         out: new Date(),
//         securitySign: 'Kapil',
//         remarks: new Date(),
//       };

//       // Send a POST request to the register API endpoint
//       const response = await request(app)
//         .post('/api/v1/register/')
//         .set('Authorization', `Token ${user?.token}`)
//         .send(payload);

//       // Assertions
//       expect(response.status).toBe(201);
//       // Add more assertions as needed
//     });

//     it('Returns 401 if not authorized', async () => {
//       // Send a GET request to the register API endpoint
//       const response = await request(app).get('/api/v1/register/');

//       // Assertions
//       expect(response.status).toBe(401);
//       // Add more assertions as needed
//     });
//   });
// });

// Import required dependencies
import "dotenv/config";
import mongoose from "mongoose";
import request from "supertest";
import bcrypt from "bcryptjs";
import { getRequestListener } from "../src/cli/bootstrap";

// Import the User and Register models
import { User, Register } from "../src/models";

const app = getRequestListener();

describe("Register API Tests", () => {
  let token;
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password", salt);
    const user = await User.create({
      email: "test@example.com",
      firstName: "Test",
      lastName: "User",
      password: hashedPassword,
      isActive: true,
      dateJoined: new Date(),
    });
    const res = await request(app).post("/api/v1/accounts/login").send({
      email: user.email,
      password: "password",
    });
    token = res.body.token;
  });

  afterEach(async () => {
    await User.deleteMany({});
    await Register.deleteMany({});
  });

  describe("POST /api/v1/register/", () => {
    it("Performs Create Register", async () => {
      const user = await User.findOne({ email: "test@example.com" });
      const payload = {
        user: user._id,
        date: new Date(),
        name: "Rithvik Sharma",
        company: "Apple",
        personToMeet: "Amogh Madan",
        mobile: 1122334455,
        purpose: "Develop Application",
        in: new Date(),
        sign: "Attended",
        out: new Date(),
        securitySign: "Kapil",
        remarks: "Some remarks",
      };

      const response = await request(app)
        .post("/api/v1/register/")
        .send(payload)
        .set("Authorization", `Bearer ${token}`);
      expect(response.status).toBe(201);
    });

    it("Returns 401 if not authorized", async () => {
      const response = await request(app).get("/api/v1/register/");
      expect(response.status).toBe(401);
    });
  });
});
