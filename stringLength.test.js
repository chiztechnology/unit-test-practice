const reverseString = require("./reverseString");
const stringLength = require("./index")

describe('Test string length', ()=>{
  it('Test length', ()=>{
    expect(stringLength('welcome')).toBe(7);
  });
});

describe('Reverse String', ()=>{
  it('Reverse a String', ()=>{
    expect(reverseString('welcome')).toStrictEqual('emoclew');
  });
});