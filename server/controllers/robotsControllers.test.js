const mockRobots = require("../mocks/robots");
const { getRobots } = require("./robotsControllers");

jest.mock("../../db/models/Robot", () => ({
  ...jest.requireActual("../../db/models/Robot"),
  find: () => mockRobots,
}));

describe("Given the getRobots function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  describe("When its invoked with a request", () => {
    test("Then it should call the response method status with 200", async () => {
      const expectedResult = 200;

      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedResult);
    });
  });
  test("Then it should call the response method json with a list of robots", async () => {
    const expectedResult = {
      robots: mockRobots,
    };
    await getRobots(null, res);

    expect(res.json).toHaveBeenCalledWith(expectedResult);
  });
});
