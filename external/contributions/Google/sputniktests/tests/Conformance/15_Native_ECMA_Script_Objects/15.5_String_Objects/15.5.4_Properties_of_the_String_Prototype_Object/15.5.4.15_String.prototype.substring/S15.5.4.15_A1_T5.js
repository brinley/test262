// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A1_T5;
* @section: 15.5.4.15;
* @assertion: String.prototype.substring (start, end);
* @description: Arguments are null and Function(), and instance is function object, that have overrided valueOf function;
*/

__func.valueOf=function(){return "gnulluna"};

Function.prototype.substring=String.prototype.substring;


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func.substring(null, Function()) !== "") {
  $ERROR('#1: __func.valueOf=function(){return "gnulluna"}; Function.prototype.substring=String.prototype.substring; function __func(){}; __func.substring(null, Function()) === "". Actual: '+__func.substring(null, Function()) );
}
//
//////////////////////////////////////////////////////////////////////////////

function __func(){};
