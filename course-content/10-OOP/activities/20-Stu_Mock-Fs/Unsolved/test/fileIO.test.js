const FileIO = require('../fileIO');

// does hoisting matters? 
// how does it run exactly?
describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const newFile = new FileIO;
      message = newFile.read("message");
      jest.message.mockReturnValue("go")
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
    });
  });
});
