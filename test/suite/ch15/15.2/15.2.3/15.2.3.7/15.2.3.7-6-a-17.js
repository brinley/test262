/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-17.js
 * @description Object.defineProperties - 'O' is the Math object which implements its own [[GetOwnProperty]] method to get 'P' (8.12.9 step 1 ) 
 */


function testcase() {

        try {
            Object.defineProperty(Math, "prop", {
                value: 11,
                writable: true,
                configurable: true
            });
            var hasProperty = Math.hasOwnProperty("prop") && Math.prop === 11;

            Object.defineProperties(Math, {
                prop: {
                    value: 12
                }
            });
            return hasProperty && Math.prop === 12;
        } finally {
            delete Math.prop;
        }
    }
runTestCase(testcase);
