const request = require("supertest");
const db = require("../database/dbConfig.js");

const authRouter = require("../api/server.js");

describe("auth-router", function() {
  describe("POST /register", function() {
    // beforeEach(async () => {
    //   await db("users").truncate();
    // });
    it("should create/register a new user", function() {
      return request(authRouter)
        .post("/api/auth/register")
        .send({
          username: "wtf",
          password: "wtf",
          department: "wtf"
        })
        .expect("Content-Type", /json/)
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
    it("should have username of test", function() {
      return request(authRouter)
        .post("/api/auth/register")
        .send({
          username: "fml",
          password: "fml",
          department: "fml"
        })
        .expect("Content-Type", /json/)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});
