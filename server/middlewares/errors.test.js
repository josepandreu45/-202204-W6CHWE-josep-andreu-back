const { error404, error500 } = require("./errors");

describe("Given the error404 function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  describe("When it's invoked with a request", () => {
    test("Then it should call the response method status with 404", () => {
      const expectedResult = 404;

      error404(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedResult);
    });
  });
  describe("When it's invoked with a request", () => {
    test("Then it should call the response method json with error,not found", () => {
      const expextedResult = { msg: "error, not found" };

      error404(null, res);

      expect(res.json).toHaveBeenCalledWith(expextedResult);
    });
  });
});

describe("Given the error500 function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  describe("When its invoked with a request", () => {
    test("Then it should call the response methot status with 500", () => {
      const expectedResult = 500;

      error500(null, null, res);

      expect(res.status).toHaveBeenCalledWith(expectedResult);
    });
  });
  test("Then it should call the response method json with msg: server error", () => {
    const expectedResult = { msg: "server error" };

    error500(null, null, res);

    expect(res.json).toHaveBeenCalledWith(expectedResult);
  });
});
