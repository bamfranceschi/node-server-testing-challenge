const request = require("supertest");

const userRouter = require("../api/server");

describe("user-router", function() {
  describe("DELETE /:id", function() {
    it("should DELETE a new user", function() {
      return request(userRouter)
        .delete("/api/users/3")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should be truthy", function() {
      return request(userRouter)
        .delete("/api/users/4")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
