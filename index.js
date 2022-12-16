const stringLength = str =>{
  if(str.length >=1 && str.length <=10){
    return str.length;
  }else{
    return new Error("test case not allowed");
  }
};


module.exports = stringLength;