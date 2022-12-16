const capitalize = require("./capitalize-string");

describe('Test Capitalizing sting', ()=>{
  it('Test Capitalize String', ()=>{
    expect(capitalize('welcome')).toStrictEqual("Welcome");
  });
});
