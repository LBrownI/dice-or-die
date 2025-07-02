// Import the 'request' object from supertest for making HTTP requests
const request = require("supertest");
// Import your main Express app file
const app = require("../app");

// Describe what this test suite is for
describe("GET / - Main App Endpoint", () => {
  // Define a single test case
  it("should respond with a 200 OK status code", async () => {
    // Use supertest to make a GET request to the '/' route of your app
    const response = await request(app).get("/");

    // Use Jest's 'expect' to assert that the response status is 200
    expect(response.statusCode).toBe(200);
  });
});
