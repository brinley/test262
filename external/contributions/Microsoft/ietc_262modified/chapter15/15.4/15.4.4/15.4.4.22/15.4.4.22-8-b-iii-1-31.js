﻿/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.



ES5Harness.registerTest({

    id: "15.4.4.22-8-b-iii-1-31",

    path: "TestCases/chapter15/15.4/15.4.4/15.4.4.22/15.4.4.22-8-b-iii-1-31.js",

    description: "Array.prototype.reduceRight - element changed by getter on current iteration is observed subsequetly on an Array-like object",

    test: function testcase() {
        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === 2 && curVal === 1);
            }
        }

        var obj = { 0: 0, length: 3 };
        var preIterVisible = false;

        Object.defineProperty(obj, "1", {
            get: function () {
                if (preIterVisible) {
                    return 1;
                } else {
                    return "20";
                }
            },
            configurable: true
        });

        Object.defineProperty(obj, "2", {
            get: function () {
                preIterVisible = true;
                return 2;
            },
            configurable: true
        });

        Array.prototype.reduceRight.call(obj, callbackfn);
        return testResult;
    },

    precondition: function prereq() {
        return fnExists(Array.prototype.reduceRight) && fnExists(Object.defineProperty) && fnSupportsArrayIndexGettersOnObjects();
    }

});
