const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    suite('Function convertHandler.getNum(input)', function(){
      test('whole number input',(done) => {
        let input='32l'
        assert.equal(convertHandler.getNum(input),32);
        done();
      });
      test('decimal number input',(done) => {
        let input='3.2l'
        assert.equal(convertHandler.getNum(input),3.2);
        done();
      });
      test(' fractional input',(done) => {
        let input='3/2l'
        assert.equal(convertHandler.getNum(input),3/2);
        done();
      });
      test('fractional input with a decimal',(done) => {
        let input='4.4/2l'
        assert.equal(convertHandler.getNum(input),4.4/2);
        done();
      });
      test('an error on a double-fraction',(done) => {
        let input='4/3/2l'
        assert.equal(convertHandler.getNum(input),undefined);
        done();
      });
      test('default to a numerical input of 1 when no numerical input is provided',(done) => {
        let input='l'
        assert.equal(convertHandler.getNum(input),1);
        done();
      });
    });

    suite('Function convertHandler.getUnit(input),convertHandler.getReturnUnit(input),convertHandler.spellOutUnit(input)',
     function(){
        test('read each valid input unit',(done) => {
            let input=['l','L','gal','GAL','km','KM','mi','MI','kg','KG','lbs','LBS'];
            let output=['L','L','gal','gal','km','km','mi','mi','kg','kg','lbs','lbs'];
          input.map((ele,index) => {
            assert.equal(convertHandler.getUnit(ele),output[index]);
          });
            done();
          });
        test('an error for an invalid input unit',(done) => {
            let input='32li'
            assert.equal(convertHandler.getUnit(input),undefined);
            done();
          });
        test('return unit for each valid input unit',(done) => {
          let input=['l','L','gal','GAL','km','KM','mi','MI','kg','KG','lbs','LBS'];
          let output=['gal','gal','L','L','mi','mi','km','km','lbs','lbs','kg','kg'];
        input.map((ele,index) => {
          assert.equal(convertHandler.getReturnUnit(ele),output[index]);
        });
          done();
          });
        test('return the spelled-out string unit for each valid input unit',(done) => {
          let input=['l','L','gal','GAL','km','KM','mi','MI','kg','KG','lbs','LBS'];
          let output=['liters','liters','gallons','gallons','kilometers','kilometers','miles','miles','kilograms','kilograms','pounds','pounds'];
        input.map((ele,index) => {
          assert.equal(convertHandler.spellOutUnit(ele),output[index]);
        });
          done();
          });
    });
    suite('Function convertHandler.getReturnUnit(input)', function(){
        test('convert gal to L,L to gal,mi to km,km to mi,lbs to kg,kg to lbs',(done) => {
          let input=['gal','L','mi','km','lbs','kg'];
          let output=['L','gal','km','mi','kg','lbs'];
        input.map((ele,index) => {
          assert.equal(convertHandler.getReturnUnit(ele),output[index]);
        });
          done();
          }); 
    });
    
});