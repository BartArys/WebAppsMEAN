var Request = require("request");

describe("Server", () => {
  let server;
  let personId;
  let eventId;
  beforeAll(() => {
    server = require("../bin/www");
  });
  afterAll(() => {});
  describe("create new person", () => {
    let data = {};
    beforeAll((done) => {
      Request({
        method: 'POST',
        uri: 'http://localhost:8080/API/people',
        json: true,
        body: {
          firstname: 'first',
          lastname: 'last',
          email: 'valid@emails.com',
          password: 'longpassword'
        }
      }, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        personId = data.body._id;
        done();
      }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
    });
    it("status 200", () => {
      expect(data.status).toBe(200);
    });
    it("check body", () => {
      expect(data.body.firstname).toBe("first");
      expect(data.body.lastname).toBe("last");
      expect(data.body.email).toBe("valid@emails.com");
      expect(data.body._id).toBeDefined();
    });
  });
  describe("create new event", () => {
    let data = {};
    console.log(`Person ID: ${personId}`);
    beforeAll((done) => {
      Request({
        method: 'POST',
        uri: `http://localhost:8080/API/events`,
        json: true,
        body: {
          name: "event",
          people: [{
            id: personId
          }]
        }
      }, (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
    });
    it("status 200", () => {
      expect(data.status).toBe(200);
    });
    it("check body", () => {
      expect(data.body.name).toBe("event");
      expect(data.body.people.length).toBe(2);
      expect(data.body._id).toBeDefined();
      eventId = data.body._id;
    });
  });
  describe("delete event", () => {
    var data = {};
    beforeAll((done) => {
      Request.delete(`http://localhost:8080/API/events/${eventId}`,
        (error, response, body) => {
          data.status = response.statusCode;
          done();
        }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
    });
    it("Status 200", () => {
      expect(data.status).toBe(200);
    });

  });
});
