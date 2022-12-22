'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert',(req,res) => {
    let input=req.query.input;
    let initNum=convertHandler.getNum(input);
    let initUnit=convertHandler.getUnit(input);

    if(!initNum && !initUnit){
      res.send("invalid number and unit");
    }
    else if(!initNum){
      res.send("invalid number");
    }
    else if(!initUnit){
      res.send("invalid unit");
    }
    
    let returnNum=convertHandler.convert(initNum, initUnit);
    let returnUnit=convertHandler.getReturnUnit(initUnit);
    let string=convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    res.json({initNum,initUnit,returnNum,returnUnit,string});
  })

};
