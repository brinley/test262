/// Copyright (c) 2009 Microsoft Corporation 
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
    id: "15.3.4.5.2-4-1",

    path: "TestCases/chapter15/15.3/15.3.4/15.3.4.5.2/15.3.4.5.2-4-1.js",

    description: "[[Construct]] - 'F''s [[BoundArgs]] is used as the former part of arguments of calling the [[Construct]] internal method of 'F''s [[TargetFunction]] when 'F' is called as constructor",

    test: function testcase() {
        var func = function (x, y, z) {
            var objResult = {};
            objResult.returnValue = x + y + z;
            objResult.returnVerifyResult = arguments[0] === "a" && arguments.length === 3;
            return objResult;
        };

        var NewFunc = Function.prototype.bind.call(func, {}, "a", "b", "c");

        var newInstance = new NewFunc();

        return newInstance.hasOwnProperty("returnValue") && newInstance.returnValue === "abc" &&
            newInstance.hasOwnProperty("returnVerifyResult") && newInstance.returnVerifyResult === true;
    },

    precondition: function prereq() {
        return fnExists(Function.prototype.bind);
    }
});
