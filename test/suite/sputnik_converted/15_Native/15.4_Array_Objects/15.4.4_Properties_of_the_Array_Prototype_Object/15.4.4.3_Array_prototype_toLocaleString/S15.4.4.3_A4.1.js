// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.3_A4.1;
* @section: 15.4.4.3, 15.2.4.7, 12.6.4;
* @assertion: The length property of toLocaleString has the attribute DontEnum;
* @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.3_A4.1",

path: "15.4.4.3, 15.2.4.7, 12.6.4",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (Array.prototype.toLocaleString.propertyIsEnumerable('length') !== false) {
  $ERROR('#1: Array.prototype.toLocaleString.propertyIsEnumerable(\'length\') === false. Actual: ' + (Array.prototype.toLocaleString.propertyIsEnumerable('length')));
}

//CHECK#2
var result = true;
for (var p in Array.toLocaleString){
  if (p === "length") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array.toLocaleString) { if (p === "length") result = false; }  result === true;');
}


 }
});
