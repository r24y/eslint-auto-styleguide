
> eslint-auto-styleguide@1.0.0 dev /Users/mullery1/Documents/foss/eslint-auto-styleguide
> DEPLOY_ENV=local node -r babel-core/register -r babel-polyfill src/index.js

## accessor-pairs
 Enforces getter/setter pairs in objects (accessor-pairs)

**Setting:** `2`





    /*eslint accessor-pairs: 2*/
    
    var o = {                       /*error Getter is not present*/
        set a(value) {
            this.val = value;
        }
    };
    
    var o = {d: 1};
    Object.defineProperty(o, 'c', { /*error Getter is not present*/
        set: function(value) {
            this.val = value;
        }
    });



    /*eslint accessor-pairs: 2*/
    
    var o = {
        set a(value) {
            this.val = value;
        },
        get a() {
            return this.val;
        }
    };
    
    var o = {d: 1};
    Object.defineProperty(o, 'c', {
        set: function(value) {
            this.val = value;
        },
        get: function() {
            return this.val;
        }
    });
## array-bracket-spacing
 Disallow or enforce spaces inside of brackets. (array-bracket-spacing)

**Setting:** `[2,"never"]`





    /*eslint array-bracket-spacing: [2, "never"]*/
    /*eslint-env es6*/
    
    var arr = [ 'foo', 'bar' ];   /*error There should be no space after '['*/ /*error There should be no space before ']'*/
    var arr = ['foo', 'bar' ];                                                 /*error There should be no space before ']'*/
    var arr = [ ['foo'], 'bar'];  /*error There should be no space after '['*/
    var arr = [[ 'foo' ], 'bar']; /*error There should be no space after '['*/ /*error There should be no space before ']'*/
    var arr = ['foo',
      'bar'
    ];
    var [ x, y ] = z;             /*error There should be no space after '['*/ /*error There should be no space before ']'*/
    var [ x,y ] = z;              /*error There should be no space after '['*/ /*error There should be no space before ']'*/
    var [ x, ...y ] = z;          /*error There should be no space after '['*/ /*error There should be no space before ']'*/
    var [ ,,x, ] = z;             /*error There should be no space after '['*/ /*error There should be no space before ']'*/



    /*eslint array-bracket-spacing: [2, "never"]*/
    /*eslint-env es6*/
    
    var arr = [];
    var arr = ['foo', 'bar', 'baz'];
    var arr = [['foo'], 'bar', 'baz'];
    var arr = [
      'foo',
      'bar',
      'baz'
    ];
    var arr = [
      'foo',
      'bar'];
    
    var [x, y] = z;
    var [x,y] = z;
    var [x, ...y] = z;
    var [,,x,] = z;
## array-callback-return
 Enforces return statements in callbacks of array's methods (array-callback-return)

**Setting:** `2`


## arrow-body-style
 Require braces in arrow function body (arrow-body-style)

**Setting:** `[2,"always"]`





    /*eslint arrow-body-style: [2, "always"]*/
    /*eslint-env es6*/
    let foo = () => 0;
## arrow-parens
 Require parens in arrow function arguments (arrow-parens)

**Setting:** `[0,"always"]`


## arrow-spacing
 Require space before/after arrow function's arrow (arrow-spacing)

**Setting:** `[2,{"after":true,"before":true}]`


## block-scoped-var
 Treat var as Block Scoped (block-scoped-var)

**Setting:** `2`





    /*eslint block-scoped-var: 2*/
    
    function doSomething() {
        if (true) {
            var build = true;
        }
    
        console.log(build); /*error 'build' used outside of binding context.*/
    }



    /*eslint block-scoped-var: 2*/
    
    function doSomething() {
        if (true) {
            var build = true;  /*error 'build' used outside of binding context.*/
        } else {
            var build = false; /*error 'build' used outside of binding context.*/
        }
    }



    /*eslint block-scoped-var: 2*/
    
    function doAnother() {
        try {
            var build = 1;
        } catch (e) {
            var f = build; /*error 'build' used outside of binding context.*/
        }
    }



    /*eslint block-scoped-var: 2*/
    
    function doSomething() {
        var build;
    
        if (true) {
            build = true;
        }
    
        console.log(build);
    }



    /*eslint block-scoped-var: 2*/
    
    function doSomething() {
        var build;
    
        if (true) {
            build = true;
        } else {
            build = false;
        }
    }
## block-spacing
 Disallow or enforce spaces inside of single line blocks. (block-spacing)

**Setting:** `[2,"always"]`


## brace-style
 Require Brace Style (brace-style)

**Setting:** `[2,"1tbs",{"allowSingleLine":true}]`





    /*eslint brace-style: [2, "1tbs", { "allowSingleLine": true }]*/
    
    function nop() { return; }
    
    if (foo) { bar(); }
    
    if (foo) { bar(); } else { baz(); }
    
    try { somethingRisky(); } catch(e) { handleError(); }
## callback-return
 Enforce Return After Callback (callback-return)

**Setting:** `2`





    /*eslint callback-return: 2*/
    
    function foo() {
        if (err) {
            callback(err); /*error Expected return with your callback function.*/
        }
        callback();
    }



    /*eslint callback-return: 2*/
    
    function foo() {
        if (err) {
            return callback(err);
        }
        callback();
    }



    /*eslint callback-return: 2*/
    
    function foo(callback) {
        if (err) {
            setTimeout(callback, 0); // this is bad, but WILL NOT warn
        }
        callback();
    }



    /*eslint callback-return: 2*/
    
    function foo(callback) {
        if (err) {
            process.nextTick(function() {
                return callback(); // this is bad, but WILL NOT warn
            });
        }
        callback();
    }



    /*eslint callback-return: 2*/
    
    function foo(callback) {
        if (err) {
            callback(err); // this is fine, but WILL warn /*error Expected return with your callback function.*/
        } else {
            callback();    // this is fine, but WILL warn /*error Expected return with your callback function.*/
        }
    }
## camelcase
 Require Camelcase (camelcase)

**Setting:** `[2,{"properties":"always"}]`


## comma-dangle
 Disallow or Enforce Dangling Commas (comma-dangle)

**Setting:** `[2,"never"]`





    /*eslint comma-dangle: [2, "never"]*/
    
    var foo = {
        bar: "baz",
        qux: "quux",   /*error Unexpected trailing comma.*/
    };
    
    var arr = [1,2,];  /*error Unexpected trailing comma.*/
    
    foo({
      bar: "baz",
      qux: "quux",     /*error Unexpected trailing comma.*/
    });



    /*eslint comma-dangle: [2, "never"]*/
    
    var foo = {
        bar: "baz",
        qux: "quux"
    };
    
    var arr = [1,2];
    
    foo({
      bar: "baz",
      qux: "quux"
    });
## comma-spacing
 Enforces spacing around commas (comma-spacing)

**Setting:** `[2,{"after":true,"before":false}]`


## comma-style
 Comma style (comma-style)

**Setting:** `[2,"last"]`





    /*eslint comma-style: [2, "last"]*/
    
    var foo = 1
    ,                        /*error Bad line breaking before and after ','.*/
    bar = 2;
    
    var foo = 1
      , bar = 2;             /*error ',' should be placed last.*/
    
    
    var foo = ["apples"
               , "oranges"]; /*error ',' should be placed last.*/
    
    
    function bar() {
        return {
            "a": 1
            ,"b:": 2         /*error ',' should be placed last.*/
        };
    }



    /*eslint comma-style: [2, "last"]*/
    
    var foo = 1, bar = 2;
    
    var foo = 1,
        bar = 2;
    
    
    var foo = ["apples",
               "oranges"];
    
    
    function bar() {
        return {
            "a": 1,
            "b:": 2
        };
    }
## complexity
 Limit Cyclomatic Complexity (complexity)

**Setting:** `[1,10]`


## computed-property-spacing
 Disallow or enforce spaces inside of computed properties. (computed-property-spacing)

**Setting:** `[2,"never"]`





    /*eslint computed-property-spacing: [2, "never"]*/
    /*eslint-env es6*/
    
    obj[foo ]                                                       /*error There should be no space before ']'*/
    obj[ 'foo']        /*error There should be no space after '['*/
    var x = {[ b ]: a} /*error There should be no space after '['*/ /*error There should be no space before ']'*/
    obj[foo[ bar ]]    /*error There should be no space after '['*/ /*error There should be no space before ']'*/



    /*eslint computed-property-spacing: [2, "never"]*/
    /*eslint-env es6*/
    
    obj[foo]
    obj['foo']
    var x = {[b]: a}
    obj[foo[bar]]
## consistent-return
 Require Consistent Returns (consistent-return)

**Setting:** `2`





    /*eslint consistent-return: 2*/
    
    function doSomething(condition) {
    
        if (condition) {
            return true;
        } else {
            return;                   /*error Expected a return value.*/
        }
    }
    
    function doSomething(condition) {
    
        if (condition) {
            return;
        } else {
            return true;              /*error Expected no return value.*/
        }
    }
    
    function doSomething(condition) { /*error Expected to return a value at the end of this function.*/
    
        if (condition) {
            return true;
        }
    }



    /*eslint consistent-return: 2*/
    
    function doSomething(condition) {
    
        if (condition) {
            return true;
        } else {
            return false;
        }
    }
## consistent-this
 Require Consistent This (consistent-this)

**Setting:** `[2,"self"]`


## constructor-super
 Verify calls of `super()` in constructors (constructor-super)

**Setting:** `2`





    /*eslint constructor-super: 2*/
    /*eslint-env es6*/
    
    class A {
        constructor() {
            super();       /*error unexpected 'super()'.*/
        }
    }
    
    class A extends null {
        constructor() {
            super();       /*error unexpected 'super()'.*/
        }
    }
    
    class A extends B {
        constructor() { }  /*error this constructor requires 'super()'.*/
    }



    /*eslint constructor-super: 2*/
    /*eslint-env es6*/
    
    class A {
        constructor() { }
    }
    
    class A extends null {
        constructor() { }
    }
    
    class A extends B {
        constructor() {
            super();
        }
    }
## curly
 Require Following Curly Brace Conventions (curly)

**Setting:** `2`





    /*eslint curly: 2*/
    
    if (foo) foo++; /*error Expected { after 'if' condition.*/
    
    while (bar)     /*error Expected { after 'while' condition.*/
        baz();
    
    if (foo) {      /*error Expected { after 'else'.*/
        baz();
    } else qux();



    /*eslint curly: 2*/
    
    if (foo) {
        foo++;
    }
    
    while (bar) {
        baz();
    }
    
    if (foo) {
        baz();
    } else {
        qux();
    }
## default-case
 Require Default Case in Switch Statements (default-case)

**Setting:** `0`


## dot-location
 Enforce newline before and after dot (dot-location)

**Setting:** `[2,"property"]`





    /*eslint dot-location: [2, "property"]*/
    
    var foo = object. /*error Expected dot to be on same line as property.*/
    property;



    /*eslint dot-location: [2, "property"]*/
    
    var foo = object
    .property;
    var bar = object.property;
## dot-notation
 Require Dot Notation (dot-notation)

**Setting:** `2`





    /*eslint dot-notation: 2*/
    
    var x = foo["bar"]; /*error ["bar"] is better written in dot notation.*/



    /*eslint dot-notation: 2*/
    
    var x = foo.bar;
    
    var x = foo[bar];    // Property name is a variable, square-bracket notation required
## eol-last
 Require file to end with single newline (eol-last)

**Setting:** `2`





    /*eslint eol-last: 2*/
    
    function doSmth() {
      var foo = 2;
    }



    /*eslint eol-last: 2*/
    
    function doSmth() {
      var foo = 2;
    }
    // spaces here
## eqeqeq
 Require === and !== (eqeqeq)

**Setting:** `2`





    /* eslint eqeqeq: 2 */
    
    if (x == 42) { }                     /*error Expected '===' and instead saw '=='.*/
    
    if ("" == text) { }                  /*error Expected '===' and instead saw '=='.*/
    
    if (obj.getStuff() != undefined) { } /*error Expected '!==' and instead saw '!='.*/
## func-names
 Require Function Expressions to have a Name (func-names)

**Setting:** `0`


## func-style
 Enforce Function Style (func-style)

**Setting:** `[2,"expression"]`





    /*eslint func-style: [2, "expression"]*/
    
    function foo() {  /*error Expected a function expression.*/
        // ...
    }



    /*eslint func-style: [2, "expression"]*/
    
    var foo = function() {
        // ...
    };
## generator-star-spacing
 Enforce spacing around the * in generator functions (generator-star-spacing)

**Setting:** `[0,{"after":false,"before":true}]`


## global-require
 Enforce require() on the top-level module scope. (global-require)

**Setting:** `2`





    /*eslint global-require: 2*/
    /*eslint-env es6*/
    
    // calling require() inside of a function is not allowed
    function readFile(filename, callback) {
        var fs = require('fs');                                /*error Unexpected require().*/
        fs.readFile(filename, callback)
    }
    
    // conditional requires like this are also not allowed
    if (DEBUG) { require('debug'); }                           /*error Unexpected require().*/
    
    // a require() in a switch statement is also flagged
    switch(x) { case '1': require('1'); break; }               /*error Unexpected require().*/
    
    // you may not require() inside an arrow function body
    var getModule = (name) => require(name);                   /*error Unexpected require().*/
    
    // you may not require() inside of a function body as well
    function getModule(name) { return require(name); }         /*error Unexpected require().*/
    
    // you may not require() inside of a try/catch block
    try {
        require(unsafeModule);                                 /*error Unexpected require().*/
    } catch(e) {
        console.log(e);
    }



    /*eslint global-require: 2*/
    
    // all these variations of require() are ok
    require('x');
    var y = require('y');
    var z;
    z = require('z').initialize();
    
    // requiring a module and using it in a function is ok
    var fs = require('fs');
    function readFile(filename, callback) {
        fs.readFile(filename, callback)
    }
    
    // you can use a ternary to determine which module to require
    var logger = DEBUG ? require('dev-logger') : require('logger');
    
    // if you want you can require() at the end of your module
    function doSomethingA() {}
    function doSomethingB() {}
    var x = require("x"),
        z = require("z");
## guard-for-in
 Require Guarding for-in (guard-for-in)

**Setting:** `2`





    /*eslint guard-for-in: 2*/
    
    for (key in foo) {    /*error The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.*/
        doSomething(key);
    }



    /*eslint guard-for-in: 2*/
    
    for (key in foo) {
        if ({}.hasOwnProperty.call(foo, key)) {
            doSomething(key);
        }
    }
## handle-callback-err
 Enforce Callback Error Handling (handle-callback-err)

**Setting:** `2`





    /*eslint handle-callback-err: 2*/
    
    function loadData (err, data) { /*error Expected error to be handled.*/
        doSomething();
    }



    /*eslint handle-callback-err: 2*/
    
    function loadData (err, data) {
        if (err) {
            console.log(err.stack);
        }
        doSomething();
    }
    
    function generateError (err) {
        if (err) {}
    }
## id-length
 Limit minimum and maximum length for identifiers (id-length)

**Setting:** `[1,{"exceptions":["P","$","_"],"max":50,"min":2}]`


## id-match
 Require IDs to match a pattern (id-match)

**Setting:** `[1,"(^[A-Za-z]+(?:[A-Z][a-z]*)*\\d*$)|(^[A-Z]+(_[A-Z]+)*(_\\d$)*$)|(^(_|\\$)$)",{"properties":true}]`


## indent
 Validate Indentation (indent)

**Setting:** `[2,4]`





    /*eslint indent: [2, 4, {"SwitchCase": 1}]*/
    
    switch(a){
        case "a":
            break;
        case "b":
            break;
    }
## init-declarations
 Enforce/Disallow Variable Initializations (init-declarations)

**Setting:** `0`


## jsx-quotes
 Enforce JSX Quote Style (jsx-quotes)

**Setting:** `[1,"prefer-single"]`


## key-spacing
 Enforce Property Spacing (key-spacing)

**Setting:** `[2,{"afterColon":true,"beforeColon":false}]`


## keyword-spacing
 Enforce spacing before and after keywords (keyword-spacing)

**Setting:** `[2,{"after":true,"before":true}]`


## linebreak-style
 Disallow mixing CRLF and LF linebreaks (linebreak-style)

**Setting:** `[2,"unix"]`





    /*eslint linebreak-style: [2, "unix"]*/
    
    var a = 'a'; // \r\n /*error Expected linebreaks to be 'LF' but found 'CRLF'.*/



    /*eslint linebreak-style: [2, "unix"]*/
    
    var a = 'a', // \n
        b = 'b'; // \n
    // \n
    function foo(params) {// \n
        // do stuff \n
    }// \n
## lines-around-comment
 Enforce empty lines around comments (lines-around-comment)

**Setting:** `[2,{"beforeBlockComment":false,"beforeLineComment":false}]`


## max-nested-callbacks
 Set Maximum Depth of Nested Callbacks (max-nested-callbacks)

**Setting:** `[1,3]`


## new-cap
 Require Constructors to Use Initial Caps (new-cap)

**Setting:** `[0,{"capIsNew":false,"newIsCap":true}]`


## new-parens
 Require Parens for Constructors (new-parens)

**Setting:** `2`





    /*eslint new-parens: 2*/
    
    var person = new Person; /*error Missing '()' invoking a constructor*/



    /*eslint new-parens: 2*/
    
    var person = new Person();
## newline-after-var
 Require or disallow an empty newline after variable declarations (newline-after-var)

**Setting:** `[2,"always"]`





    /*eslint newline-after-var: [2, "always"]*/
    
    var greet = "hello,",      /*error Expected blank line after variable declarations.*/
        name = "world";
    console.log(greet, name);



    /*eslint newline-after-var: [2, "always"]*/
    
    var greet = "hello,",
        name = "world";
    
    console.log(greet, name);



    /*eslint newline-after-var: [2, "always"]*/
    
    var greet = "hello,";
    var name = "world";             /*error Expected blank line after variable declarations.*/
    // var name = require("world");
    console.log(greet, name);
    
    
    /*eslint-disable camelcase*/
    var greet = "hello,";
    var target_name = "world";      /*error Expected blank line after variable declarations.*/
    /*eslint-enable camelcase*/
    console.log(greet, name);



    /*eslint newline-after-var: [2, "always"]*/
    
    var greet = "hello,";
    var name = "world";
    // var name = require("world");
    
    console.log(greet, name);
    
    
    /*eslint-disable camelcase*/
    var greet = "hello,";
    var target_name = "world";
    /*eslint-enable camelcase*/
    
    console.log(greet, name);
## no-alert
 Disallow Use of Alert (no-alert)

**Setting:** `2`





    /*eslint no-alert: 2*/
    
    alert("here!");                          /*error Unexpected alert.*/
    
    confirm("Are you sure?");                /*error Unexpected confirm.*/
    
    prompt("What's your name?", "John Doe"); /*error Unexpected prompt.*/



    /*eslint no-alert: 2*/
    
    customAlert("Something happened!");
    
    customConfirm("Are you sure?");
    
    customPrompt("Who are you?");
    
    function foo() {
        var alert = myCustomLib.customAlert;
        alert();
    }
## no-array-constructor
 Disallow creation of dense arrays using the `Array` constructor (no-array-constructor)

**Setting:** `2`





    /*eslint no-array-constructor: 2*/
    
    Array(0, 1, 2)     /*error The array literal notation [] is preferrable.*/



    /*eslint no-array-constructor: 2*/
    
    new Array(0, 1, 2) /*error The array literal notation [] is preferrable.*/



    /*eslint no-array-constructor: 2*/
    
    Array(500)



    /*eslint no-array-constructor: 2*/
    
    new Array(someOtherArray.length)
## no-caller
 Disallow Use of caller/callee (no-caller)

**Setting:** `2`





    /*eslint no-caller: 2*/
    
    function foo(n) {
        if (n <= 0) {
            return;
        }
    
        arguments.callee(n - 1);   /*error Avoid arguments.callee.*/
    }
    
    [1,2,3,4,5].map(function(n) {
        return !(n > 1) ? 1 : arguments.callee(n - 1) * n; /*error Avoid arguments.callee.*/
    });



    /*eslint no-caller: 2*/
    
    function foo(n) {
        if (n <= 0) {
            return;
        }
    
        foo(n - 1);
    }
    
    [1,2,3,4,5].map(function factorial(n) {
        return !(n > 1) ? 1 : factorial(n - 1) * n;
    });
## no-case-declarations
 Disallow lexical declarations in case/default clauses (no-case-declarations)

**Setting:** `2`





    /*eslint no-case-declarations: 2*/
    
    switch (foo) {
        case 1:
            let x = 1;  /*error Unexpected lexical declaration in case block.*/
            break;
        case 2:
            const y = 2;  /*error Unexpected lexical declaration in case block.*/
            break;
        case 3:
            function f() {}  /*error Unexpected lexical declaration in case block.*/
            break;
        default:
            class C {}  /*error Unexpected lexical declaration in case block.*/
    }
## no-catch-shadow
 Disallow Shadowing of Variables Inside of catch (no-catch-shadow)

**Setting:** `2`





    /*eslint no-catch-shadow: 2*/
    
    var err = "x";
    
    try {
        throw "problem";
    } catch (err) {      /*error Value of 'err' may be overwritten in IE 8 and earlier.*/
    
    }
    
    function err() {
        // ...
    };
    
    try {
        throw "problem";
    } catch (err) {      /*error Value of 'err' may be overwritten in IE 8 and earlier.*/
    
    }
## no-class-assign
 Disallow modifying variables of class declarations (no-class-assign)

**Setting:** `2`





    /*eslint no-class-assign: 2*/
    /*eslint-env es6*/
    
    class A { }
    A = 0;         /*error 'A' is a class.*/



    /*eslint no-class-assign: 2*/
    /*eslint-env es6*/
    
    A = 0;         /*error 'A' is a class.*/
    class A { }



    /*eslint no-class-assign: 2*/
    /*eslint-env es6*/
    
    class A {
        b() {
            A = 0; /*error 'A' is a class.*/
        }
    }



    /*eslint no-class-assign: 2*/
    /*eslint-env es6*/
    
    let A = class A {
        b() {
            A = 0; /*error 'A' is a class.*/
            // `let A` is shadowed by the class name.
        }
    }



    /*eslint no-class-assign: 2*/
    /*eslint-env es6*/
    
    let A = class A { }
    A = 0; // A is a variable.



    /*eslint no-class-assign: 2*/
    /*eslint-env es6*/
    
    let A = class {
        b() {
            A = 0; // A is a variable.
        }
    }



    /*eslint no-class-assign: 2*/
    /*eslint-env es6*/
    
    class A {
        b(A) {
            A = 0; // A is a parameter.
        }
    }
## no-cond-assign
 Disallow Assignment in Conditional Statements (no-cond-assign)

**Setting:** `2`





    /*eslint no-cond-assign: 2*/
    
    // Unintentional assignment
    var x;
    if (x = 0) {         /*error Expected a conditional expression and instead saw an assignment.*/
        var b = 1;
    }
    
    // Practical example that is similar to an error
    function setHeight(someNode) {
        "use strict";
        do {             /*error Expected a conditional expression and instead saw an assignment.*/
            someNode.height = "100px";
        } while (someNode = someNode.parentNode);
    }



    /*eslint no-cond-assign: 2*/
    
    // Assignment replaced by comparison
    var x;
    if (x === 0) {
        var b = 1;
    }
    
    // Practical example that wraps the assignment in parentheses
    function setHeight(someNode) {
        "use strict";
        do {
            someNode.height = "100px";
        } while ((someNode = someNode.parentNode));
    }
    
    // Practical example that wraps the assignment and tests for 'null'
    function setHeight(someNode) {
        "use strict";
        do {
            someNode.height = "100px";
        } while ((someNode = someNode.parentNode) !== null);
    }
## no-confusing-arrow
 Disallow arrow functions where they could be confused with comparisons (no-confusing-arrow)

**Setting:** `2`





    /*eslint no-confusing-arrow: 2*/
    /*eslint-env es6*/
    
    var x = a => 1 ? 2 : 3
    var x = (a) => 1 ? 2 : 3



    /*eslint no-confusing-arrow: 2*/
    /*eslint-env es6*/
    
    var x = a => { return 1 ? 2 : 3; }
    var x = (a) => { return 1 ? 2 : 3; }
## no-console
 Disallow Use of console (no-console)

**Setting:** `1`


## no-const-assign
 Disallow modifying variables that are declared using `const` (no-const-assign)

**Setting:** `2`





    /*eslint no-const-assign: 2*/
    /*eslint-env es6*/
    
    const a = 0;
    a = 1;       /*error 'a' is constant.*/



    /*eslint no-const-assign: 2*/
    /*eslint-env es6*/
    
    const a = 0;
    a += 1;      /*error 'a' is constant.*/



    /*eslint no-const-assign: 2*/
    /*eslint-env es6*/
    
    const a = 0;
    ++a;         /*error 'a' is constant.*/



    /*eslint no-const-assign: 2*/
    /*eslint-env es6*/
    
    const a = 0;
    console.log(a);



    /*eslint no-const-assign: 2*/
    /*eslint-env es6*/
    
    for (const a in [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
        console.log(a);
    }



    /*eslint no-const-assign: 2*/
    /*eslint-env es6*/
    
    for (const a of [1, 2, 3]) { // `a` is re-defined (not modified) on each loop step.
        console.log(a);
    }
## no-constant-condition
 Disallow use of constant expressions in conditions (no-constant-condition)

**Setting:** `1`


## no-continue
 Disallow continue (no-continue)

**Setting:** `2`





    /*eslint no-continue: 2*/
    
    var sum = 0,
        i;
    
    for(i = 0; i < 10; i++) {
        if(i >= 5) {
            continue;              /*error Unexpected use of continue statement*/
        }
    
        a += i;
    }



    /*eslint no-continue: 2*/
    
    var sum = 0,
        i;
    
    labeledLoop: for(i = 0; i < 10; i++) {
        if(i >= 5) {
            continue labeledLoop;  /*error Unexpected use of continue statement*/
        }
    
        a += i;
    }



    /*eslint no-continue: 2*/
    
    var sum = 0,
        i;
    
    for(i = 0; i < 10; i++) {
        if(i < 5) {
           a += i;
        }
    }
## no-control-regex
 Disallow Controls Characters in Regular Expressions (no-control-regex)

**Setting:** `2`





    /*eslint no-control-regex: 2*/
    
    var pattern1 = /\\x1f/;
    var pattern2 = new RegExp("\x1f"); /*error Unexpected control character in regular expression.*/



    /*eslint no-control-regex: 2*/
    
    var pattern1 = /\\x20/;
    var pattern2 = new RegExp("\x20");
## no-debugger
 Disallow debugger (no-debugger)

**Setting:** `1`


## no-delete-var
 Disallow Variables Deletion (no-delete-var)

**Setting:** `2`





    /*eslint no-delete-var: 2*/
    
    var x;
    delete x;  /*error Variables should not be deleted.*/
## no-div-regex
 Disallow Regexs That Look Like Division (no-div-regex)

**Setting:** `2`





    /*eslint no-div-regex: 2*/
    
    function bar() { return /=foo/; } /*error A regular expression literal can be confused with '/='.*/



    /*eslint no-div-regex: 2*/
    
    function bar() { return /\=foo/; }
## no-dupe-args
 No duplicate arguments (no-dupe-args)

**Setting:** `2`





    /*eslint no-dupe-args: 2*/
    
    function foo(a, b, a) {               /*error Duplicate param 'a'.*/
        console.log("which a is it?", a);
    }
## no-dupe-class-members
 Disallow duplicate name in class members (no-dupe-class-members)

**Setting:** `2`





    /*eslint no-dupe-class-members: 2*/
    /*eslint-env es6*/
    
    class Foo {
      bar() { }
      bar() { }          /*error Duplicate name 'bar'.*/
    }
    
    class Foo {
      bar() { }
      get bar() { }      /*error Duplicate name 'bar'.*/
    }
    
    class Foo {
      static bar() { }
      static bar() { }   /*error Duplicate name 'bar'.*/
    }



    /*eslint no-dupe-class-members: 2*/
    /*eslint-env es6*/
    
    class Foo {
      bar() { }
      qux() { }
    }
    
    class Foo {
      get bar() { }
      set bar(value) { }
    }
    
    class Foo {
      static bar() { }
      bar() { }
    }
## no-dupe-keys
 Disallow Duplicate Keys (no-dupe-keys)

**Setting:** `2`





    /*eslint no-dupe-keys: 2*/
    
    var foo = {
        bar: "baz",
        bar: "qux"     /*error Duplicate key 'bar'.*/
    };
    
    var foo = {
        "bar": "baz",
        bar: "qux"     /*error Duplicate key 'bar'.*/
    };
    
    var foo = {
        0x1: "baz",
        1: "qux"       /*error Duplicate key '1'.*/
    };



    /*eslint no-dupe-keys: 2*/
    
    var foo = {
        bar: "baz",
        quxx: "qux"
    };
## no-duplicate-case
 Rule to disallow a duplicate case label (no-duplicate-case)

**Setting:** `2`





    /*eslint no-duplicate-case: 2*/
    
    var a = 1,
        one = 1;
    
    switch (a) {
        case 1:
            break;
        case 1:      /*error Duplicate case label.*/
            break;
        case 2:
            break;
        default:
            break;
    }
    
    switch (a) {
        case "1":
            break;
        case "1":    /*error Duplicate case label.*/
            break;
        case "2":
            break;
        default:
            break;
    }
    
    switch (a) {
        case one:
            break;
        case one:    /*error Duplicate case label.*/
            break;
        case 2:
            break;
        default:
            break;
    }



    /*eslint no-duplicate-case: 2*/
    
    var a = 1;
    
    switch (a) {
        case 1:
            break;
        case 2:
            break;
        default:
            break;
    }
## no-else-return
 Disallow return before else (no-else-return)

**Setting:** `0`


## no-empty
 Disallow Empty Block Statements (no-empty)

**Setting:** `1`


## no-empty-character-class
 Disallow Empty Character Classes (no-empty-character-class)

**Setting:** `2`





    /*eslint no-empty-character-class: 2*/
    
    var foo = /^abc[]/;  /*error Empty class.*/
    
    /^abc[]/.test(foo);  /*error Empty class.*/
    
    bar.match(/^abc[]/); /*error Empty class.*/



    /*eslint no-empty-character-class: 2*/
    
    var foo = /^abc/;
    
    var foo = /^abc[a-z]/;
    
    var bar = new RegExp("^abc[]");
## no-empty-pattern
 Disallow empty destructuring patterns (no-empty-pattern)

**Setting:** `2`





    /*eslint no-empty-pattern: 2*/
    
    var {} = foo;
    var [] = foo;
    var {a: {}} = foo;
    var {a: []} = foo;
    function foo({}) {}
    function foo([]) {}
    function foo({a: {}}) {}
    function foo({a: []}) {}



    /*eslint no-empty-pattern: 2*/
    
    var {a = {}} = foo;
    var {a = []} = foo;
    function foo({a = {}}) {}
    function foo({a = []}) {}
## no-eq-null
 Disallow Null Comparisons (no-eq-null)

**Setting:** `2`





    /*eslint no-eq-null: 2*/
    
    if (foo == null) {     /*error Use ‘===’ to compare with ‘null’.*/
      bar();
    }
    
    while (qux != null) {  /*error Use ‘===’ to compare with ‘null’.*/
      baz();
    }



    /*eslint no-eq-null: 2*/
    
    if (foo === null) {
      bar();
    }
    
    while (qux !== null) {
      baz();
    }
## no-eval
 Disallow eval() (no-eval)

**Setting:** `2`





    /*eslint no-eval: 2*/
    
    var obj = { x: "foo" },
        key = "x",
        value = eval("obj." + key); /*error eval can be harmful.*/
    
    (0, eval)("var a = 0");         /*error eval can be harmful.*/
    
    var foo = eval;                 /*error eval can be harmful.*/
    foo("var a = 0");
    
    // This `this` is the global object.
    this.eval("var a = 0");         /*error eval can be harmful.*/



    /*eslint no-eval: 2*/
    /*eslint-env browser*/
    
    window.eval("var a = 0"); /*error eval can be harmful.*/



    /*eslint no-eval: 2*/
    /*eslint-env node*/
    
    global.eval("var a = 0"); /*error eval can be harmful.*/



    /*eslint no-eval: 2*/
    
    var obj = { x: "foo" },
        key = "x",
        value = obj[key];
    
    class A {
        foo() {
            // This is a user-defined method.
            this.eval("var a = 0");
        }
    
        eval() {
        }
    }



    /*eslint no-eval: 2*/
    
    var obj = { x: "foo" },
        key = "x",
        value = eval("obj." + key); /*error eval can be harmful.*/



    /*eslint no-eval: 2*/
    
    (0, eval)("var a = 0");
    
    var foo = eval;
    foo("var a = 0");
    
    this.eval("var a = 0");



    /*eslint no-eval: 2*/
    /*eslint-env browser*/
    
    window.eval("var a = 0");



    /*eslint no-eval: 2*/
    /*eslint-env node*/
    
    global.eval("var a = 0");
## no-ex-assign
 Disallow Assignment of the Exception Parameter (no-ex-assign)

**Setting:** `2`





    /*eslint no-ex-assign: 2*/
    
    try {
        // code
    } catch (e) {
        e = 10;   /*error Do not assign to the exception parameter.*/
    }



    /*eslint no-ex-assign: 2*/
    
    try {
        // code
    } catch (e) {
        var foo = 'bar';
    }
## no-extend-native
 Disallow Extending of Native Objects (no-extend-native)

**Setting:** `2`


## no-extra-bind
 Disallow unnecessary function binding (no-extra-bind)

**Setting:** `2`





    /*eslint no-extra-bind: 2*/
    /*eslint-env es6*/
    
    var x = function () {   /*error The function binding is unnecessary.*/
        foo();
    }.bind(bar);
    
    var x = (() => {        /*error The function binding is unnecessary.*/
        foo();
    }).bind(bar);
    
    var x = (() => {        /*error The function binding is unnecessary.*/
        this.foo();
    }).bind(bar);
    
    var x = function () {   /*error The function binding is unnecessary.*/
        (function () {
          this.foo();
        }());
    }.bind(bar);
    
    var x = function () {   /*error The function binding is unnecessary.*/
        function foo() {
          this.bar();
        }
    }.bind(baz);



    /*eslint no-extra-bind: 2*/
    
    var x = function () {
        this.foo();
    }.bind(bar);
    
    var x = function (a) {
        return a + 1;
    }.bind(foo, bar);
## no-extra-boolean-cast
 Disallow Extra Boolean Casts (no-extra-boolean-cast)

**Setting:** `0`


## no-extra-parens
 Disallow Extra Parens (no-extra-parens)

**Setting:** `2`





    /*eslint no-extra-parens: 2*/
    
    a = (b * c); /*error Gratuitous parentheses around expression.*/
    
    (a * b) + c; /*error Gratuitous parentheses around expression.*/
    
    typeof (a);  /*error Gratuitous parentheses around expression.*/
    
    (function(){} ? a() : b());  /*error Gratuitous parentheses around expression.*/



    /*eslint no-extra-parens: 2*/
    
    (0).toString();
    
    ({}.toString.call());
    
    (function(){}) ? a() : b();
    
    (/^a$/).test(x);
## no-extra-semi
 Disallow Extra Semicolons (no-extra-semi)

**Setting:** `2`





    /*eslint no-extra-semi: 2*/
    
    var x = 5;;      /*error Unnecessary semicolon.*/
    
    function foo() {
        // code
    };               /*error Unnecessary semicolon.*/



    /*eslint no-extra-semi: 2*/
    
    var x = 5;
    
    var foo = function() {
        // code
    };
## no-fallthrough
 Disallow Case Statement Fallthrough (no-fallthrough)

**Setting:** `2`





    /*eslint no-fallthrough: 2*/
    
    switch(foo) {
        case 1:            /*error Expected a 'break' statement before 'case'.*/
            doSomething();
    
        case 2:
            doSomething();
    }



    /*eslint no-fallthrough: 2*/
    
    switch(foo) {
        case 1:
            doSomething();
            break;
    
        case 2:
            doSomething();
    }
    
    function bar(foo) {
        switch(foo) {
            case 1:
                doSomething();
                return;
    
            case 2:
                doSomething();
        }
    }
    
    switch(foo) {
        case 1:
            doSomething();
            throw new Error("Boo!");
    
        case 2:
            doSomething();
    }
    
    switch(foo) {
        case 1:
        case 2:
            doSomething();
    }
    
    switch(foo) {
        case 1:
            doSomething();
            // falls through
    
        case 2:
            doSomething();
    }
## no-floating-decimal
 Disallow Floating Decimals (no-floating-decimal)

**Setting:** `2`





    /*eslint no-floating-decimal: 2*/
    
    var num = .5;  /*error A leading decimal point can be confused with a dot.*/
    var num = 2.;  /*error A trailing decimal point can be confused with a dot.*/
    var num = -.7; /*error A leading decimal point can be confused with a dot.*/



    /*eslint no-floating-decimal: 2*/
    
    var num = 0.5;
    var num = 2.0;
## no-func-assign
 Disallow Function Assignment (no-func-assign)

**Setting:** `2`





    /*eslint no-func-assign: 2*/
    
    function foo() {}
    foo = bar;        /*error 'foo' is a function.*/
    
    function foo() {
        foo = bar;    /*error 'foo' is a function.*/
    }



    /*eslint no-func-assign: 2*/
    
    foo = bar;        /*error 'foo' is a function.*/
    function foo() {}



    /*eslint no-func-assign: 2*/
    
    var foo = function () {}
    foo = bar;
    
    function foo(foo) { // `foo` is shadowed.
        foo = bar;
    }
    
    function foo() {
        var foo = bar;  // `foo` is shadowed.
    }
## no-implicit-coercion
 Disallow the type conversion with shorter notations. (no-implicit-coercion)

**Setting:** `2`





    /*eslint no-implicit-coercion: 2*/
    
    var b = !!foo;             /*error use 'Boolean(foo)' instead.*/
    var b = ~foo.indexOf("."); /*error use 'foo.indexOf(".") !== -1' instead.*/
    // only with `indexOf`/`lastIndexOf` method calling.



    /*eslint no-implicit-coercion: 2*/
    
    var b = Boolean(foo);
    var b = foo.indexOf(".") !== -1;
    
    var n = ~foo; // This is a just binary negating.



    /*eslint no-implicit-coercion: 2*/
    
    var n = +foo;    /*error use 'Number(foo)' instead.*/
    var n = 1 * foo; /*error use 'Number(foo)' instead.*/



    /*eslint no-implicit-coercion: 2*/
    
    var b = Number(foo);
    var b = parseFloat(foo);
    var b = parseInt(foo, 10);



    /*eslint no-implicit-coercion: 2*/
    
    var n = "" + foo; /*error use 'String(foo)' instead.*/
    
    foo += ""; /*error use 'foo = String(foo)' instead.*/



    /*eslint no-implicit-coercion: 2*/
    
    var b = String(foo);
## no-implicit-globals
 Disallow `var` and Named Functions in Global Scope (no-implicit-globals)

**Setting:** `0`


## no-implied-eval
 Disallow Implied eval() (no-implied-eval)

**Setting:** `2`





    /*eslint no-implied-eval: 2*/
    
    setTimeout("alert('Hi!');", 100);    /*error Implied eval. Consider passing a function instead of a string.*/
    
    setInterval("alert('Hi!');", 100);   /*error Implied eval. Consider passing a function instead of a string.*/
    
    execScript("alert('Hi!')");          /*error Implied eval. Consider passing a function instead of a string.*/
    
    window.setTimeout("count = 5", 10);  /*error Implied eval. Consider passing a function instead of a string.*/
    
    window.setInterval("foo = bar", 10); /*error Implied eval. Consider passing a function instead of a string.*/



    /*eslint no-implied-eval: 2*/
    
    setTimeout(function() {
        alert("Hi!");
    }, 100);
    
    setInterval(function() {
        alert("Hi!");
    }, 100);
## no-inline-comments
 Disallows comments after code. Comments must come on their own lines (no-inline-comments)

**Setting:** `2`





    /*eslint no-inline-comments: 2*/
    
    var a = 1; // declaring a to 1                /*error Unexpected comment inline with code.*/
    
    function getRandomNumber(){
        return 4; // chosen by fair dice roll.    /*error Unexpected comment inline with code.*/
                  // guaranteed to be random.
    }
    
    /* A block comment before code */ var b = 2;  /*error Unexpected comment inline with code.*/
    
    var c = 3; /* A block comment after code */   /*error Unexpected comment inline with code.*/



    /*eslint no-inline-comments: 2*/
    
    // This is a comment above a line of code
    var foo = 5;
    
    var bar = 5;
    //This is a comment below a line of code
## no-inner-declarations
 Declarations in Program or Function Body (no-inner-declarations)

**Setting:** `2`





    /*eslint no-inner-declarations: 2*/
    
    if (test) {
        function doSomething() { }        /*error Move function declaration to program root.*/
    }
    
    function doSomethingElse() {
        if (test) {
            function doAnotherThing() { } /*error Move function declaration to function body root.*/
        }
    }



    /*eslint no-inner-declarations: 2*/
    /*eslint-env es6*/
    
    function doSomething() { }
    
    function doSomethingElse() {
        function doAnotherThing() { }
    }
    
    if (test) {
        asyncCall(id, function (err, data) { });
    }
    
    var fn;
    if (test) {
        fn = function fnExpression() { };
    }
    
    var bar = 42;
    
    if (test) {
        let baz = 43;
    }
    
    function doAnotherThing() {
        var baz = 81;
    }
## no-invalid-regexp
 Disallow Invalid Regular Expressions (no-invalid-regexp)

**Setting:** `2`





    /*eslint no-invalid-regexp: 2*/
    
    RegExp('[')      /*error Invalid regular expression: /[/: Unterminated character class*/
    
    RegExp('.', 'z') /*error Invalid flags supplied to RegExp constructor 'z'*/
    
    new RegExp('\\') /*error Invalid regular expression: /\/: \ at end of pattern*/



    /*eslint no-invalid-regexp: 2*/
    
    RegExp('.')
    
    new RegExp
    
    this.RegExp('[')
## no-invalid-this
 Disallow `this` keywords outside of classes or class-like objects. (no-invalid-this)

**Setting:** `0`


## no-irregular-whitespace
 No irregular whitespace (no-irregular-whitespace)

**Setting:** `2`





    /*eslint no-irregular-whitespace: 2*/
    
    function thing() /*<NBSP>*/{ /*error Irregular whitespace not allowed*/
      return 'test';
    }
    
    function thing( /*<NBSP>*/){ /*error Irregular whitespace not allowed*/
      return 'test';
    }
    
    function thing /*<NBSP>*/(){ /*error Irregular whitespace not allowed*/
      return 'test';
    }
    
    function thing᠎/*<MVS>*/(){   /*error Irregular whitespace not allowed*/
      return 'test';
    }
    
    function thing() {
      return 'test'; /*<ENSP>*/  /*error Irregular whitespace not allowed*/
    }
    
    function thing() {
      return 'test'; /*<NBSP>*/  /*error Irregular whitespace not allowed*/
    }



    /*eslint no-irregular-whitespace: 2*/
    
    function thing() {
      return ' <NBSP>thing';
    }
    
    function thing() {
      return '​<ZWSP>thing';
    }
    
    function thing() {
      return 'th <NBSP>ing';
    }
## no-iterator
 Disallow Iterator (no-iterator)

**Setting:** `2`





    /*eslint no-iterator: 2*/
    
    Foo.prototype.__iterator__ = function() { /*error Reserved name '__iterator__'.*/
        return new FooIterator(this);
    };
    
    foo.__iterator__ = function () {};        /*error Reserved name '__iterator__'.*/
    
    foo["__iterator__"] = function () {};     /*error Reserved name '__iterator__'.*/



    /*eslint no-iterator: 2*/
    
    var __iterator__ = foo; // Not using the `__iterator__` property.
## no-label-var
 Disallow Labels That Are Variables Names (no-label-var)

**Setting:** `2`





    /*eslint no-label-var: 2*/
    
    var x = foo;
    function bar() {
    x:               /*error Found identifier with same name as label.*/
      for (;;) {
        break x;
      }
    }



    /*eslint no-label-var: 2*/
    
    // The variable that has the same name as the label is not in scope.
    
    function foo() {
      var q = t;
    }
    
    function bar() {
    q:
      for(;;) {
        break q;
      }
    }
## no-labels
 Disallow Labeled Statements (no-labels)

**Setting:** `2`





    /*eslint no-labels: 2*/
    
    label:                  /*error Unexpected labeled statement.*/
        while(true) {
            // ...
        }
    
    label:                  /*error Unexpected labeled statement.*/
        while(true) {
            break label;    /*error Unexpected label in break statement.*/
        }
    
    label:                  /*error Unexpected labeled statement.*/
        while(true) {
            continue label; /*error Unexpected label in continue statement.*/
        }
    
    label:                  /*error Unexpected labeled statement.*/
        switch (a) {
        case 0:
            break label;    /*error Unexpected label in break statement.*/
        }
    
    label:                  /*error Unexpected labeled statement.*/
        {
            break label;    /*error Unexpected label in break statement.*/
        }
    
    label:                  /*error Unexpected labeled statement.*/
        if (a) {
            break label;    /*error Unexpected label in break statement.*/
        }



    /*eslint no-labels: 2*/
    
    var f = {
        label: "foo"
    };
    
    while (true) {
        break;
    }
    
    while (true) {
        continue;
    }
## no-lone-blocks
 Disallow Unnecessary Nested Blocks (no-lone-blocks)

**Setting:** `2`





    /*eslint no-lone-blocks: 2*/
    
    {}                    /*error Block is redundant.*/
    
    if (foo) {
        bar();
        {                 /*error Nested block is redundant.*/
            baz();
        }
    }
    
    function bar() {
        {                 /*error Nested block is redundant.*/
            baz();
        }
    }
    
    {                     /*error Block is redundant.*/
        function foo() {}
    }
## no-lonely-if
 Disallow `if` as the Only Statement in an `else` Block (no-lonely-if)

**Setting:** `2`





    /*eslint no-lonely-if: 2*/
    
    if (condition) {
        // ...
    } else {
        if (anotherCondition) { /*error Unexpected if as the only statement in an else block.*/
            // ...
        }
    }
    
    if (condition) {
        // ...
    } else {
        if (anotherCondition) { /*error Unexpected if as the only statement in an else block.*/
            // ...
        } else {
            // ...
        }
    }



    /*eslint no-lonely-if: 2*/
    
    if (condition) {
        // ...
    } else if (anotherCondition) {
        // ...
    }
    
    if (condition) {
        // ...
    } else if (anotherCondition) {
        // ...
    } else {
        // ...
    }
    
    if (condition) {
        // ...
    } else {
        if (anotherCondition) {
            // ...
        }
        doSomething();
    }
## no-loop-func
 Disallow Functions in Loops (no-loop-func)

**Setting:** `2`





    /*eslint no-loop-func: 2*/
    /*eslint-env es6*/
    
    for (var i=10; i; i--) {
        (function() { return i; })();     /*error Don't make functions within a loop*/
    }
    
    while(i) {
        var a = function() { return i; }; /*error Don't make functions within a loop*/
        a();
    }
    
    do {
        function a() { return i; };      /*error Don't make functions within a loop*/
        a();
    } while (i);
    
    let foo = 0;
    for (let i=10; i; i--) {
        // Bad, function is referencing block scoped variable in the outer scope.
        var a = function() { return foo; }; /*error Don't make functions within a loop*/
        a();
    }



    /*eslint no-loop-func: 2*/
    /*eslint-env es6*/
    
    var a = function() {};
    
    for (var i=10; i; i--) {
        a();
    }
    
    for (var i=10; i; i--) {
        var a = function() {}; // OK, no references to variables in the outer scopes.
        a();
    }
    
    for (let i=10; i; i--) {
        var a = function() { return i; }; // OK, all references are referring to block scoped variables in the loop.
        a();
    }
    
    var foo = 100;
    for (let i=10; i; i--) {
        var a = function() { return foo; }; // OK, all references are referring to never modified variables.
        a();
    }
    //... no modifications of foo after this loop ...
## no-magic-numbers
 Disallow Magic Numbers (no-magic-numbers)

**Setting:** `0`


## no-mixed-requires
 Disallow Mixed Requires (no-mixed-requires)

**Setting:** `0`


## no-mixed-spaces-and-tabs
 Disallow mixed spaces and tabs for indentation (no-mixed-spaces-and-tabs)

**Setting:** `2`





    /*eslint no-mixed-spaces-and-tabs: 2*/
    
    function add(x, y) {
    // --->..return x + y;
    
          return x + y;    /*error Mixed spaces and tabs.*/
    }
    
    function main() {
    // --->var x = 5,
    // --->....y = 7;
    
        var x = 5,
            y = 7;         /*error Mixed spaces and tabs.*/
    }



    /*eslint no-mixed-spaces-and-tabs: 2*/
    
    function add(x, y) {
    // --->return x + y;
        return x + y;
    }
## no-multi-spaces
 Disallow multiple spaces (no-multi-spaces)

**Setting:** `2`





    /*eslint no-multi-spaces: 2*/
    
    var a =  1;            /*error Multiple spaces found before '1'.*/
    
    if(foo   === "bar") {} /*error Multiple spaces found before '==='.*/
    
    a <<  b                /*error Multiple spaces found before 'b'.*/
    
    var arr = [1,  2];     /*error Multiple spaces found before '2'.*/
    
    a ?  b: c              /*error Multiple spaces found before 'b'.*/



    /*eslint no-multi-spaces: 2*/
    
    var a = 1;
    
    if(foo === "bar") {}
    
    a << b
    
    var arr = [1, 2];
    
    a ? b: c



    /* eslint no-multi-spaces: 2 */
    /* eslint key-spacing: [2, { align: "value" }] */
    
    var obj = {
        first:  "first",
        second: "second"
    };
## no-multi-str
 Disallow Multiline Strings (no-multi-str)

**Setting:** `2`





    /*eslint no-multi-str: 2*/
    
    /*error Multiline support is limited to browsers supporting ES5 only.*/ var x = "Line 1 \
             Line 2";



    /*eslint no-multi-str: 2*/
    
    var x = "Line 1\n" +
            "Line 2";
## no-multiple-empty-lines
 Disallows multiple blank lines (no-multiple-empty-lines)

**Setting:** `[2,{"max":2}]`


## no-native-reassign
 Disallow Reassignment of Native Objects (no-native-reassign)

**Setting:** `2`





    /*eslint no-native-reassign: 2*/
    
    String = new Object(); /*error String is a read-only native object.*/
## no-negated-condition
 Disallow use of negated expressions in conditions (no-negated-condition)

**Setting:** `2`





    /*eslint no-negated-condition: 2*/
    
    if (!a) {               /*error Unexpected negated condition.*/
        doSomething();
    } else {
        doSomethingElse();
    }
    
    if (a != b) {           /*error Unexpected negated condition.*/
        doSomething();
    } else {
        doSomethingElse();
    }
    
    if (a !== b) {          /*error Unexpected negated condition.*/
        doSomething();
    } else {
        doSomethingElse();
    }
    
    
    !a ? b : c              /*error Unexpected negated condition.*/



    /*eslint no-negated-condition: 2*/
    
    if (!a) {
        doSomething();
    }
    
    if (!a) {
        doSomething();
    } else if (b) {
        doSomething();
    }
    
    if (a != b) {
        doSomething();
    }
    
    a ? b : c
## no-negated-in-lhs
 Disallow negated left operand of `in` operator (no-negated-in-lhs)

**Setting:** `2`





    /*eslint no-negated-in-lhs: 2*/
    
    if(!a in b) {       /*error The 'in' expression's left operand is negated*/
        // do something
    }



    /*eslint no-negated-in-lhs: 2*/
    
    if(!(a in b)) {
        // do something
    }
    
    if(('' + !a) in b) {
        // do something
    }
## no-nested-ternary
 Disallow Nested Ternaries (no-nested-ternary)

**Setting:** `2`





    /*eslint no-nested-ternary: 2*/
    
    var thing = foo ? bar : baz === qux ? quxx : foobar; /*error Do not nest ternary expressions*/
    
    foo ? baz === qux ? quxx() : foobar() : bar();       /*error Do not nest ternary expressions*/



    /*eslint no-nested-ternary: 2*/
    
    var thing;
    
    if (foo) {
      thing = bar;
    } else if (baz === qux) {
      thing = quxx;
    } else {
      thing = foobar;
    }
## no-new
 Disallow new For Side Effects (no-new)

**Setting:** `2`





    /*eslint no-new: 2*/
    
    new Thing(); /*error Do not use 'new' for side effects.*/



    /*eslint no-new: 2*/
    
    var thing = new Thing();
    
    Thing();
## no-new-func
 Disallow Function Constructor (no-new-func)

**Setting:** `2`





    /*eslint no-new-func: 2*/
    
    var x = new Function("a", "b", "return a + b"); /*error The Function constructor is eval.*/
    var x = Function("a", "b", "return a + b");     /*error The Function constructor is eval.*/



    /*eslint no-new-func: 2*/
    
    var x = function (a, b) {
        return a + b;
    };
## no-new-object
 Disallow the use of the Object constructor (no-new-object)

**Setting:** `2`





    /*eslint no-new-object: 2*/
    
    var myObject = new Object(); /*error The object literal notation {} is preferrable.*/
    
    var myObject = new Object;   /*error The object literal notation {} is preferrable.*/



    /*eslint no-new-object: 2*/
    
    var myObject = new CustomObject();
    
    var myObject = {};
## no-new-require
 Disallow new require (no-new-require)

**Setting:** `2`





    /*eslint no-new-require: 2*/
    
    var appHeader = new require('app-header'); /*error Unexpected use of new with require.*/



    /*eslint no-new-require: 2*/
    
    var AppHeader = require('app-header');
## no-new-symbol
 Disallow Symbol Constructor (no-new-symbol)

**Setting:** `2`





    /*eslint no-new-symbol: 2*/
    /*eslint-env es6*/
    
    var foo = new Symbol('foo');                    /*error `Symbol` cannot be called as a constructor. */



    /*eslint no-new-symbol: 2*/
    /*eslint-env es6*/
    
    var foo = Symbol('foo');
    
    
    // Ignores shadowed Symbol.
    function bar(Symbol) {
        const baz = new Symbol("baz");
    }
## no-new-wrappers
 Disallow Primitive Wrapper Instances (no-new-wrappers)

**Setting:** `2`





    /*eslint no-new-wrappers: 2*/
    
    var stringObject = new String("Hello world"); /*error Do not use String as a constructor.*/
    var numberObject = new Number(33);            /*error Do not use Number as a constructor.*/
    var booleanObject = new Boolean(false);       /*error Do not use Boolean as a constructor.*/
    
    var stringObject = new String;                /*error Do not use String as a constructor.*/
    var numberObject = new Number;                /*error Do not use Number as a constructor.*/
    var booleanObject = new Boolean;              /*error Do not use Boolean as a constructor.*/



    /*eslint no-new-wrappers: 2*/
    
    var text = String(someValue);
    var num = Number(someValue);
    
    var object = new MyString();
## no-obj-calls
 Disallow Global Object Function Calls (no-obj-calls)

**Setting:** `2`





    /*eslint no-obj-calls: 2*/
    
    var x = Math(); /*error 'Math' is not a function.*/
    var y = JSON(); /*error 'JSON' is not a function.*/



    /*eslint no-obj-calls: 2*/
    
    var x = math();
    var y = json();
## no-octal
 Disallow Octal Literals (no-octal)

**Setting:** `2`





    /*eslint no-octal: 2*/
    
    var num = 071;       /*error Octal literals should not be used.*/
    var result = 5 + 07; /*error Octal literals should not be used.*/



    /*eslint no-octal: 2*/
    
    var num  = "071";
## no-octal-escape
 Disallow Octal Escapes (no-octal-escape)

**Setting:** `2`





    /*eslint no-octal-escape: 2*/
    
    var foo = "Copyright \251"; /*error Don't use octal: '\251'. Use '\u....' instead.*/



    /*eslint no-octal-escape: 2*/
    
    var foo = "Copyright \u00A9";   // unicode
    
    var foo = "Copyright \xA9";     // hexadecimal
## no-param-reassign
 Disallow Reassignment of Function Parameters (no-param-reassign)

**Setting:** `[2,{"props":false}]`


## no-path-concat
 Disallow string concatenation when using `__dirname` and `__filename` (no-path-concat)

**Setting:** `2`





    /*eslint no-path-concat: 2*/
    
    var fullPath = __dirname + "/foo.js";  /*error Use path.join() or path.resolve() instead of + to create paths.*/
    
    var fullPath = __filename + "/foo.js"; /*error Use path.join() or path.resolve() instead of + to create paths.*/



    /*eslint no-path-concat: 2*/
    
    var fullPath = dirname + "/foo.js";
## no-process-env
 Disallow process.env (no-process-env)

**Setting:** `2`





    /*eslint no-process-env: 2*/
    
    if(process.env.NODE_ENV === "development") { /*error Unexpected use of process.env.*/
        //...
    }



    /*eslint no-process-env: 2*/
    
    var config = require("./config");
    
    if(config.env === "development") {
        //...
    }
## no-process-exit
 Disallow process.exit() (no-process-exit)

**Setting:** `2`





    /*eslint no-process-exit: 2*/
    
    process.exit(1); /*error Don't use process.exit(); throw an error instead.*/
    process.exit(0); /*error Don't use process.exit(); throw an error instead.*/



    /*eslint no-process-exit: 2*/
    
    Process.exit();
    var exit = process.exit;
## no-proto
 Disallow Use of `__proto__` (no-proto)

**Setting:** `2`





    /*eslint no-proto: 2*/
    
    var a = obj.__proto__;    /*error The '__proto__' property is deprecated.*/
    
    var a = obj["__proto__"]; /*error The '__proto__' property is deprecated.*/



    /*eslint no-proto: 2*/
    
    var a = Object.getPrototypeOf(obj);
## no-redeclare
 Disallow Redeclaring Variables (no-redeclare)

**Setting:** `[2,{"builtinGlobals":true}]`


## no-regex-spaces
 Disallow Spaces in Regular Expressions (no-regex-spaces)

**Setting:** `2`





    /*eslint no-regex-spaces: 2*/
    
    var re = /foo   bar/; /*error Spaces are hard to count. Use {3}.*/



    /*eslint no-regex-spaces: 2*/
    
    var re = /foo {3}bar/;
    
    var re = new RegExp("foo   bar");
## no-restricted-modules
 Disallow Node modules (no-restricted-modules)

**Setting:** `0`


## no-restricted-syntax
 Disallow certain syntax (no-restricted-syntax)

**Setting:** `[2,"TemplateLiteral"]`


## no-return-assign
 Disallow Assignment in return Statement (no-return-assign)

**Setting:** `2`





    /*eslint no-return-assign: 2*/
    
    function doSomething() {
        return foo = bar + 2; /*error Return statement should not contain assignment.*/
    }
    
    function doSomething() {
        return foo += 2;      /*error Return statement should not contain assignment.*/
    }



    /*eslint no-return-assign: 2*/
    
    function doSomething() {
        return foo == bar + 2;
    }
    
    function doSomething() {
        return foo === bar + 2;
    }
    
    function doSomething() {
        return (foo = bar + 2);
    }
## no-script-url
 Disallow Script URLs (no-script-url)

**Setting:** `2`





    /*eslint no-script-url: 2*/
    
    location.href = "javascript:void(0)"; /*error Script URL is a form of eval.*/
## no-self-assign
 Disallow Self Assignment (no-self-assign)

**Setting:** `2`





    /*eslint no-self-assign: 2*/
    
    foo = foo;              /*error 'foo' is assigned to itself.*/
    
    [a, b] = [a, b];        /*error 'a' is assigned to itself.*/
                            /*error 'b' is assigned to itself.*/
    
    [a, ...b] = [x, ...b];  /*error 'b' is assigned to itself.*/
    
    ({a, b} = {a, x});      /*error 'a' is assigned to itself.*/



    /*eslint no-self-assign: 2*/
    
    foo = bar;
    [a, b] = [b, a];
    
    // This pattern is warned by the `no-use-before-define` rule.
    let foo = foo;
    
    // The default values have an effect.
    [foo = 1] = [foo];
## no-self-compare
 Disallow Self Compare (no-self-compare)

**Setting:** `2`





    /*eslint no-self-compare: 2*/
    
    var x = 10;
    if (x === x) { /*error Comparing to itself is potentially pointless.*/
        x = 20;
    }
## no-sequences
 Disallow Use of the Comma Operator (no-sequences)

**Setting:** `2`





    /*eslint no-sequences: 2*/
    
    foo = doSomething, val;              /*error Unexpected use of comma operator.*/
    
    do {} while (doSomething(), !!test); /*error Unexpected use of comma operator.*/
    
    for (; doSomething(), !!test; );     /*error Unexpected use of comma operator.*/
    
    if (doSomething(), !!test);          /*error Unexpected use of comma operator.*/
    
    switch (val = foo(), val) {}         /*error Unexpected use of comma operator.*/
    
    while (val = foo(), val < 42);       /*error Unexpected use of comma operator.*/
    
    with (doSomething(), val) {}         /*error Unexpected use of comma operator.*/



    /*eslint no-sequences: 2*/
    
    foo = (doSomething(), val);
    
    (0,eval)("doSomething();");
    
    do {} while ((doSomething(), !!test));
    
    for (i = 0, j = 10; i < j; i++, j--);
    
    if ((doSomething(), !!test));
    
    switch ((val = foo(), val)) {}
    
    while ((val = foo(), val < 42));
    
    // with ((doSomething(), val)) {}
## no-shadow
 Disallow Shadowing (no-shadow)

**Setting:** `[2,{"builtinGlobals":false,"hoist":"all"}]`


## no-shadow-restricted-names
 Disallow Shadowing of Restricted Names (no-shadow-restricted-names)

**Setting:** `2`





    /*eslint no-shadow-restricted-names: 2*/
    
    function NaN(){}       /*error Shadowing of global property 'NaN'.*/
    
    !function(Infinity){}; /*error Shadowing of global property 'Infinity'.*/
    
    var undefined;         /*error Shadowing of global property 'undefined'.*/
    
    try {} catch(eval){}   /*error Shadowing of global property 'eval'.*/



    /*eslint no-shadow-restricted-names: 2*/
    
    var Object;
    
    function f(a, b){}
## no-spaced-func
 Disallow Spaces in Function Calls (no-spaced-func)

**Setting:** `2`





    /*eslint no-spaced-func: 2*/
    
    fn () /*error Unexpected space between function name and paren.*/
    
    fn    /*error Unexpected space between function name and paren.*/
    ()



    /*eslint no-spaced-func: 2*/
    
    fn()
## no-sparse-arrays
 Disallow Sparse Arrays (no-sparse-arrays)

**Setting:** `2`





    /*eslint no-sparse-arrays: 2*/
    
    var items = [,];                 /*error Unexpected comma in middle of array.*/
    var colors = [ "red",, "blue" ]; /*error Unexpected comma in middle of array.*/



    /*eslint no-sparse-arrays: 2*/
    
    var items = [];
    var items = new Array(23);
    
    // trailing comma is okay
    var colors = [ "red", "blue", ];
## no-sync
 Disallow Synchronous Methods (no-sync)

**Setting:** `0`


## no-ternary
 Disallow Ternary Operators (no-ternary)

**Setting:** `0`


## no-this-before-super
 Disallow use of `this`/`super` before calling `super()` in constructors. (no-this-before-super)

**Setting:** `2`





    /*eslint no-this-before-super: 2*/
    /*eslint-env es6*/
    
    class A extends B {
        constructor() {
            this.a = 0;        /*error 'this' is not allowed before 'super()'*/
            super();
        }
    }
    
    class A extends B {
        constructor() {
            this.foo();        /*error 'this' is not allowed before 'super()'*/
            super();
        }
    }
    
    class A extends B {
        constructor() {
            super.foo();       /*error 'super' is not allowed before 'super()'*/
            super();
        }
    }
    
    class A extends B {
        constructor() {
            super(this.foo()); /*error 'this' is not allowed before 'super()'*/
        }
    }



    /*eslint no-this-before-super: 2*/
    /*eslint-env es6*/
    
    class A {
        constructor() {
            this.a = 0; // OK, this class doesn't have an `extends` clause.
        }
    }
    
    class A extends B {
        constructor() {
            super();
            this.a = 0; // OK, this is after `super()`.
        }
    }
    
    class A extends B {
        foo() {
            this.a = 0; // OK. this is not in a constructor.
        }
    }
## no-throw-literal
 Restrict what can be thrown as an exception (no-throw-literal)

**Setting:** `2`





    /*eslint no-throw-literal: 2*/
    /*eslint-env es6*/
    
    throw "error";         /*error Expected an object to be thrown.*/
    
    throw 0;               /*error Expected an object to be thrown.*/
    
    throw undefined;       /*error Do not throw undefined.*/
    
    throw null;            /*error Expected an object to be thrown.*/
    
    var err = new Error();
    throw "an " + err;     /*error Expected an object to be thrown.*/
    // err is recast to a string literal
    
    var err = new Error();
    throw `${err}`         /*error Expected an object to be thrown.*/



    /*eslint no-throw-literal: 2*/
    
    throw new Error();
    
    throw new Error("error");
    
    var e = new Error("error");
    throw e;
    
    try {
        throw new Error("error");
    } catch (e) {
        throw e;
    }



    /*eslint no-throw-literal: 2*/
    
    var err = "error";
    throw err;
    
    function foo(bar) {
        console.log(bar);
    }
    throw foo("error");
    
    throw new String("error");
    
    var foo = {
        bar: "error"
    };
    throw foo.bar;
## no-trailing-spaces
 Disallow trailing spaces at the end of lines (no-trailing-spaces)

**Setting:** `2`





    /*eslint no-trailing-spaces: 2*/
    
    // spaces, tabs and unicode whitespaces
    // are not allowed at the end of lines
    var foo = 0;//•••••  /*error Trailing spaces not allowed.*/
    var baz = 5;//••     /*error Trailing spaces not allowed.*/



    /*eslint no-trailing-spaces: 2*/
    
    var foo = 0;
    
    var baz = 5;
## no-undef
 Disallow Undeclared Variables (no-undef)

**Setting:** `2`





    /*eslint no-undef: 2*/
    
    var a = someFunction();  /*error 'someFunction' is not defined.*/
    b = 10;                  /*error 'b' is not defined.*/



    /*eslint no-undef: 2*/
    
    if (typeof UndefinedIdentifier === "undefined") {
        // do something ...
    }
## no-undef-init
 Disallow Initializing to undefined (no-undef-init)

**Setting:** `2`





    /*eslint no-undef-init: 2*/
    /*eslint-env es6*/
    
    var foo = undefined; /*error It's not necessary to initialize 'foo' to undefined.*/
    let bar = undefined; /*error It's not necessary to initialize 'bar' to undefined.*/



    /*eslint no-undef-init: 2*/
    /*eslint-env es6*/
    
    var foo;
    let bar;
    const baz = undefined;
## no-undefined
 Disallow Use of `undefined` Variable (no-undefined)

**Setting:** `2`





    /*eslint no-undefined: 2*/
    
    var foo = undefined;      /*error Unexpected use of undefined.*/
    
    var undefined = "foo";    /*error Unexpected use of undefined.*/
    
    if (foo === undefined) {  /*error Unexpected use of undefined.*/
        // ...
    }
    
    function foo(undefined) { /*error Unexpected use of undefined.*/
        // ...
    }



    /*eslint no-undefined: 2*/
    
    var foo = void 0;
    
    var Undefined = "foo";
    
    if (typeof foo === "undefined") {
        // ...
    }
    
    global.undefined = "foo";
## no-underscore-dangle
 Disallow Dangling Underscores in Identifiers (no-underscore-dangle)

**Setting:** `2`





    /*eslint no-underscore-dangle: 2*/
    
    var foo_;           /*error Unexpected dangling '_' in 'foo_'.*/
    var __proto__ = {}; /*error Unexpected dangling '_' in '__proto__'.*/
    foo._bar();         /*error Unexpected dangling '_' in '_bar'.*/



    /*eslint no-underscore-dangle: 2*/
    
    var _ = require('underscore');
    var obj = _.contains(items, item);
    obj.__proto__ = {};
    var file = __filename;
## no-unexpected-multiline
 Avoid unexpected multiline expressions (no-unexpected-multiline)

**Setting:** `2`





    /*eslint no-unexpected-multiline: 2*/
    
    var foo = bar
    (1 || 2).baz();               /*error Unexpected newline between function and ( of function call.*/
    
    var hello = 'world'
    [1, 2, 3].forEach(addNumber); /*error Unexpected newline between object and [ of property access.*/
    
    let x = function() {}         /*error Unexpected newline between template tag and template literal.*/
    `hello`
    
    let x = function() {}
    x                             /*error Unexpected newline between template tag and template literal.*/
    `hello`



    /*eslint no-unexpected-multiline: 2*/
    
    var foo = bar;
    (1 || 2).baz();
    
    var foo = bar
    ;(1 || 2).baz()
    
    var hello = 'world';
    [1, 2, 3].forEach(addNumber);
    
    var hello = 'world'
    void [1, 2, 3].forEach(addNumber);
    
    let x = function() {};
    `hello`
    
    let tag = function() {}
    tag `hello`
## no-unmodified-loop-condition
 Disallow unmodified conditions of loops (no-unmodified-loop-condition)

**Setting:** `2`


## no-unneeded-ternary
 Disallow conditional expressions that can be expressed with simpler constructs (no-unneeded-ternary)

**Setting:** `2`





    /*eslint no-unneeded-ternary: 2*/
    
    var a = x === 2 ? true : false; /*error Unnecessary use of boolean literals in conditional expression*/
    
    var a = x ? true : false;       /*error Unnecessary use of boolean literals in conditional expression*/



    /*eslint no-unneeded-ternary: 2*/
    
    var a = x === 2 ? "Yes" : "No";
    
    var a = x !== false;
    
    var a = x ? "Yes" : "No";
    
    var a = x ? y : x;
## no-unreachable
 Disallow Unreachable Code (no-unreachable)

**Setting:** `1`


## no-unused-expressions
 Disallow Unused Expressions (no-unused-expressions)

**Setting:** `2`





    /*eslint no-unused-expressions: 2*/
    
    0         /*error Expected an assignment or function call and instead saw an expression.*/
    
    if(0) 0   /*error Expected an assignment or function call and instead saw an expression.*/
    
    {0}       /*error Expected an assignment or function call and instead saw an expression.*/
    
    f(0), {}  /*error Expected an assignment or function call and instead saw an expression.*/
    
    a && b()  /*error Expected an assignment or function call and instead saw an expression.*/
    
    a, b()    /*error Expected an assignment or function call and instead saw an expression.*/
    
    c = a, b; /*error Expected an assignment or function call and instead saw an expression.*/



    /*eslint no-unused-expressions: 2*/
    
    {}
    
    f()
    
    a = 0
    
    new C
    
    delete a.b
    
    void a
## no-unused-vars
 Disallow Unused Variables (no-unused-vars)

**Setting:** `2`





    /*eslint no-unused-vars: 2*/
    /*global some_unsed_var */   /*error 'some_unsed_var' is defined but never used*/
    
    //It checks variables you have defined as global
    some_unsed_var = 42;
    
    var x;                       /*error 'x' is defined but never used*/
    
    var y = 10;                  /*error 'y' is defined but never used*/
    y = 5;
    
    // By default, unused arguments cause warnings.
    (function(foo) {             /*error 'foo' is defined but never used*/
        return 5;
    })();
    
    // Unused recursive functions also cause warnings.
    function fact(n) {           /*error 'fact' is defined but never used*/
        if (n < 2) return 1;
        return n * fact(n - 1);
    }



    /*eslint no-unused-vars: 2*/
    
    var x = 10;
    alert(x);
    
    // foo is considered used here
    myFunc(function foo() {
        // ...
    }.bind(this));
    
    (function(foo) {
        return foo;
    })();
## no-use-before-define
 Disallow Early Use (no-use-before-define)

**Setting:** `2`





    /*eslint no-use-before-define: 2*/
    /*eslint-env es6*/
    
    alert(a);       /*error 'a' was used before it was defined*/
    var a = 10;
    
    f();            /*error 'f' was used before it was defined*/
    function f() {}
    
    function g() {
        return b;  /*error 'b' was used before it was defined*/
    }
    var b = 1;
    
    // With blockBindings: true
    {
        alert(c);  /*error 'c' was used before it was defined*/
        let c = 1;
    }



    /*eslint no-use-before-define: 2*/
    /*eslint-env es6*/
    
    var a;
    a = 10;
    alert(a);
    
    function f() {}
    f(1);
    
    var b = 1;
    function g() {
        return b;
    }
    
    // With blockBindings: true
    {
        let C;
        c++;
    }
## no-useless-call
 Disallow unnecessary `.call()` and `.apply()`. (no-useless-call)

**Setting:** `2`





    /*eslint no-useless-call: 2*/
    
    // These are same as `foo(1, 2, 3);`
    foo.call(undefined, 1, 2, 3);     /*error unnecessary '.call()'.*/
    foo.apply(undefined, [1, 2, 3]);  /*error unnecessary '.apply()'.*/
    foo.call(null, 1, 2, 3);          /*error unnecessary '.call()'.*/
    foo.apply(null, [1, 2, 3]);       /*error unnecessary '.apply()'.*/
    
    // These are same as `obj.foo(1, 2, 3);`
    obj.foo.call(obj, 1, 2, 3);       /*error unnecessary '.call()'.*/
    obj.foo.apply(obj, [1, 2, 3]);    /*error unnecessary '.apply()'.*/



    /*eslint no-useless-call: 2*/
    
    // The `this` binding is different.
    foo.call(obj, 1, 2, 3);
    foo.apply(obj, [1, 2, 3]);
    obj.foo.call(null, 1, 2, 3);
    obj.foo.apply(null, [1, 2, 3]);
    obj.foo.call(otherObj, 1, 2, 3);
    obj.foo.apply(otherObj, [1, 2, 3]);
    
    // The argument list is variadic.
    foo.apply(undefined, args);
    foo.apply(null, args);
    obj.foo.apply(obj, args);



    /*eslint no-useless-call: 2*/
    
    // This is warned.
    a[i++].foo.call(a[i++], 1, 2, 3); /*error unnecessary '.call()'.*/
    
    // This is not warned.
    a[++i].foo.call(a[i], 1, 2, 3);
## no-useless-concat
 Disallow unnecessary concatenation of strings (no-useless-concat)

**Setting:** `2`





    /*eslint no-useless-concat: 2*/
    /*eslint-env es6*/
    
    // these are the same as "10"
    var a = `some` + `string`; /*error Unexpected string concatenation of literals.*/
    var a = '1' + '0';         /*error Unexpected string concatenation of literals.*/
    var a = '1' + `0`;         /*error Unexpected string concatenation of literals.*/
    var a = `1` + '0';         /*error Unexpected string concatenation of literals.*/
    var a = `1` + `0`;         /*error Unexpected string concatenation of literals.*/



    /*eslint no-useless-concat: 2*/
    
    // when a non string is included
    var c = a + b;
    var c = '1' + a;
    var a = 1 + '1';
    var c = 1 - 2;
    // when the string concatenation is multiline
    var c = "foo" +
        "bar";
## no-useless-constructor
 Disallow unnecessary constructor (no-useless-constructor)

**Setting:** `2`





    /*eslint no-useless-constructor: 2*/
    /*eslint-env es6*/
    
    class A {
        constructor () {
        }
    }
    
    class A extends B {
        constructor (...args) {
          super(...args);
        }
    }



    /*eslint no-useless-constructor: 2*/
    
    class A { }
    
    class A {
        constructor () {
            doSomething();
        }
    }
    
    class A extends B {
        constructor() {
            super('foo');
        }
    }
    
    class A extends B {
        constructor() {
            super();
            doSomething();
        }
    }
## no-var
 require `let` or `const` instead of `var` (no-var)

**Setting:** `2`





    /*eslint no-var: 2*/
    
    var x = "y";     /*error Unexpected var, use let or const instead.*/
    var CONFIG = {}; /*error Unexpected var, use let or const instead.*/



    /*eslint no-var: 2*/
    /*eslint-env es6*/
    
    let x = "y";
    const CONFIG = {};
## no-void
 Disallow use of the void operator. (no-void)

**Setting:** `2`





    /*eslint no-void: 2*/
    
    void foo              /*error Expected 'undefined' and instead saw 'void'.*/
    
    var foo = void bar(); /*error Expected 'undefined' and instead saw 'void'.*/
## no-warning-comments
 Disallow Warning Comments (no-warning-comments)

**Setting:** `[1,{"location":"start","terms":["todo","@toto"]}]`


## no-whitespace-before-property
 Disallow whitespace before properties (no-whitespace-before-property)

**Setting:** `2`





    /*eslint no-whitespace-before-property: 2*/
    
    foo [bar]
    
    foo. bar
    
    foo .bar
    
    foo. bar. baz
    
    foo. bar()
      .baz()
    
    foo
      .bar(). baz()



    /*eslint no-whitespace-before-property: 2*/
    
    foo.bar
    
    foo[bar]
    
    foo[ bar ]
    
    foo.bar.baz
    
    foo
      .bar().baz()
    
    foo
      .bar()
      .baz()
    
    foo.
      bar().
      baz()
## no-with
 No with Statements (no-with)

**Setting:** `2`





    /*eslint no-with: 2*/
    with (foo) { /*error Unexpected use of 'with' statement.*/
        // ...
    }
## object-curly-spacing
 Disallow or enforce spaces inside of curly braces in objects. (object-curly-spacing)

**Setting:** `[0,"never"]`


## object-shorthand
 Require Object Literal Shorthand Syntax (object-shorthand)

**Setting:** `[0,"always"]`


## one-var
 Require or Disallow One Variable Declaration per Scope (one-var)

**Setting:** `0`


## one-var-declaration-per-line
 Require or disallow an newline around variable declarations (one-var-declaration-per-line)

**Setting:** `2`


## operator-assignment
 Operator Assignment Shorthand (operator-assignment)

**Setting:** `[2,"always"]`





    /*eslint operator-assignment: [2, "always"]*/
    
    x = y;
    x += y;
    x = y * z;
    x = (x * y) * z;
    x[0] /= y;
    x[foo()] = x[foo()] % 2;
    x = y + x; // `+` is not always commutative (e.g. x = "abc")



    /*eslint operator-assignment: [2, "always"]*/
    
    x = x + y;        /*error Assignment can be replaced with operator assignment.*/
    x = y * x;        /*error Assignment can be replaced with operator assignment.*/
    x[0] = x[0] / y;  /*error Assignment can be replaced with operator assignment.*/
    x.y = x.y << z;   /*error Assignment can be replaced with operator assignment.*/
## operator-linebreak
 Operator Linebreak (operator-linebreak)

**Setting:** `[2,"after"]`





    /*eslint operator-linebreak: [2, "after"]*/
    
    foo = 1
    +                        /*error Bad line breaking before and after '+'.*/
    2;
    
    foo = 1
        + 2;                 /*error '+' should be placed at the end of the line.*/
    
    foo
        = 5;                 /*error '=' should be placed at the end of the line.*/
    
    if (someCondition
        || otherCondition) { /*error '||' should be placed at the end of the line.*/
    }
    
    answer = everything
      ? 42                   /*error '?' should be placed at the end of the line.*/
      : foo;                 /*error ':' should be placed at the end of the line.*/



    /*eslint operator-linebreak: [2, "after"]*/
    
    foo = 1 + 2;
    
    foo = 1 +
          2;
    
    foo =
        5;
    
    if (someCondition ||
        otherCondition) {
    }
    
    answer = everything ?
      42 :
      foo;



    /*eslint operator-linebreak: [2, "after", { "overrides": { "?": "ignore", ":": "ignore"} }]*/
    
    answer = everything ?
      42
      : foo;
    
    answer = everything
      ?
      42
      :
      foo;
## padded-blocks
 Enforce padding within blocks (padded-blocks)

**Setting:** `[2,"never"]`





    /*eslint padded-blocks: [2, "never"]*/
    
    if (a) {  /*error Block must not be padded by blank lines.*/
    
        b();
    
    }        /*error Block must not be padded by blank lines.*/
    
    if (a)
    {        /*error Block must not be padded by blank lines.*/
    
        b();
    
    }        /*error Block must not be padded by blank lines.*/
    
    if (a) { /*error Block must not be padded by blank lines.*/
    
        b();
    }
    
    if (a) {
        b();
    
    }        /*error Block must not be padded by blank lines.*/



    /*eslint padded-blocks: [2, "never"]*/
    
    if (a) {
        b();
    }
    
    if (a)
    {
        b();
    }
## prefer-arrow-callback
 Suggest using arrow functions as callbacks. (prefer-arrow-callback)

**Setting:** `2`





    /*eslint prefer-arrow-callback: 2*/
    
    foo(function(a) { return a; });                /*error Unexpected function expression.*/
    foo(function() { return this.a; }.bind(this)); /*error Unexpected function expression.*/



    /*eslint prefer-arrow-callback: 2*/
    /*eslint-env es6*/
    
    foo(a => a);
    foo(function*() { yield; });
    
    // this is not a callback.
    var foo = function foo(a) { return a; };
    
    // using `this` without `.bind(this)`.
    foo(function() { return this.a; });
    
    // recursively.
    foo(function bar(n) { return n && n + bar(n - 1); });
## prefer-const
 Suggest using `const` (prefer-const)

**Setting:** `2`





    /*eslint prefer-const: 2*/
    /*eslint-env es6*/
    
    let a = 3;               /*error 'a' is never modified, use 'const' instead.*/
    console.log(a);
    
    // `i` is re-defined (not modified) on each loop step.
    for (let i in [1,2,3]) {  /*error 'i' is never modified, use 'const' instead.*/
        console.log(i);
    }
    
    // `a` is re-defined (not modified) on each loop step.
    for (let a of [1,2,3]) { /*error 'a' is never modified, use 'const' instead.*/
        console.log(a);
    }



    /*eslint prefer-const: 2*/
    /*eslint-env es6*/
    
    let a; // there is no initialization.
    console.log(a);
    
    // `i` gets a new binding each iteration
    for (const i in [1,2,3]) {
      console.log(i);
    }
    
    // `a` gets a new binding each iteration
    for (const a of [1,2,3]) {
      console.log(a);
    }
    
    // `end` is never modified, but we cannot separate the declarations without modifying the scope.
    for (let i = 0, end = 10; i < end; ++i) {
        console.log(a);
    }
    
    // suggest to use `no-var` rule.
    var b = 3;
    console.log(b);
## prefer-reflect
 Suggest using Reflect methods where applicable (prefer-reflect)

**Setting:** `2`





    /*eslint prefer-reflect: 2*/
    
    foo.apply(undefined, args); /*error Avoid using Function.prototype.apply, instead use Reflect.apply*/
    foo.apply(null, args);      /*error Avoid using Function.prototype.apply, instead use Reflect.apply*/
    obj.foo.apply(obj, args);   /*error Avoid using Function.prototype.apply, instead use Reflect.apply*/
    obj.foo.apply(other, args); /*error Avoid using Function.prototype.apply, instead use Reflect.apply*/
    
    foo.call(undefined, arg);   /*error Avoid using Function.prototype.call, instead use Reflect.apply*/
    foo.call(null, arg);        /*error Avoid using Function.prototype.call, instead use Reflect.apply*/
    obj.foo.call(obj, arg);     /*error Avoid using Function.prototype.call, instead use Reflect.apply*/
    obj.foo.call(other, arg);   /*error Avoid using Function.prototype.call, instead use Reflect.apply*/



    /*eslint prefer-reflect: 2*/
    
    Reflect.apply(undefined, args);
    Reflect.apply(null, args);
    Reflect.apply(obj.foo, obj, args);
    Reflect.apply(obj.foo, other, args);
    Reflect.apply(undefined, [arg]);
    Reflect.apply(null, [arg]);
    Reflect.apply(obj.foo, obj, [arg]);
    Reflect.apply(obj.foo, other, [arg]);



    /*eslint prefer-reflect: 2*/
    
    Object.defineProperty({}, 'foo', {value: 1}) /*error Avoid using Object.defineProperty, instead use Reflect.defineProperty*/



    /*eslint prefer-reflect: 2*/
    
    Reflect.defineProperty({}, 'foo', {value: 1})



    /*eslint prefer-reflect: 2*/
    
    Object.getOwnPropertyDescriptor({}, 'foo') /*error Avoid using Object.getOwnPropertyDescriptor, instead use Reflect.getOwnPropertyDescriptor*/



    /*eslint prefer-reflect: 2*/
    
    Reflect.getOwnPropertyDescriptor({}, 'foo')



    /*eslint prefer-reflect: 2*/
    
    Object.getPrototypeOf({}, 'foo') /*error Avoid using Object.getPrototypeOf, instead use Reflect.getPrototypeOf*/



    /*eslint prefer-reflect: 2*/
    
    Reflect.getPrototypeOf({}, 'foo')



    /*eslint prefer-reflect: 2*/
    
    Object.setPrototypeOf({}, Object.prototype) /*error Avoid using Object.setPrototypeOf, instead use Reflect.setPrototypeOf*/



    /*eslint prefer-reflect: 2*/
    
    Reflect.setPrototypeOf({}, Object.prototype)



    /*eslint prefer-reflect: 2*/
    
    Object.isExtensible({}) /*error Avoid using Object.isExtensible, instead use Reflect.isExtensible*/



    /*eslint prefer-reflect: 2*/
    
    Reflect.isExtensible({})



    /*eslint prefer-reflect: 2*/
    
    Object.getOwnPropertyNames({}) /*error Avoid using Object.getOwnPropertyNames, instead use Reflect.getOwnPropertyNames*/



    /*eslint prefer-reflect: 2*/
    
    Reflect.getOwnPropertyNames({})



    /*eslint prefer-reflect: 2*/
    
    Object.preventExtensions({}) /*error Avoid using Object.preventExtensions, instead use Reflect.preventExtensions*/



    /*eslint prefer-reflect: 2*/
    
    Reflect.preventExtensions({})



    /*eslint prefer-reflect: 2*/
    
    delete foo.bar; /*error Avoid using the delete keyword, instead use Reflect.deleteProperty*/



    /*eslint prefer-reflect: 2*/
    
    delete bar; // Does not reference an object, just a var
    Reflect.deleteProperty(foo, 'bar');
## prefer-rest-params
 Suggest using the rest parameters instead of `arguments` (prefer-rest-params)

**Setting:** `2`


## prefer-spread
 Suggest using the spread operator instead of `.apply()`. (prefer-spread)

**Setting:** `2`





    /*eslint prefer-spread: 2*/
    
    foo.apply(undefined, args); /*error use the spread operator instead of the '.apply()'.*/
    
    foo.apply(null, args);      /*error use the spread operator instead of the '.apply()'.*/
    
    obj.foo.apply(obj, args);   /*error use the spread operator instead of the '.apply()'.*/



    /*eslint prefer-spread: 2*/
    
    // The `this` binding is different.
    foo.apply(obj, args);
    obj.foo.apply(null, args);
    obj.foo.apply(otherObj, args);
    
    // The argument list is not variadic.
    // Those are warned by the `no-useless-call` rule.
    foo.apply(undefined, [1, 2, 3]);
    foo.apply(null, [1, 2, 3]);
    obj.foo.apply(obj, [1, 2, 3]);



    /*eslint prefer-spread: 2*/
    
    // This warns.
    a[i++].foo.apply(a[i++], args); /*error use the spread operator instead of the '.apply()'.*/
    
    // This does not warn.
    a[++i].foo.apply(a[i], args);
## prefer-template
 Suggest using template literals instead of string concatenation. (prefer-template)

**Setting:** `0`


## quote-props
 Quoting Style for Property Names (quote-props)

**Setting:** `[2,"as-needed"]`





    /*eslint quote-props: [2, "as-needed"]*/
    
    var object = {
        "a": 0,    /*error Unnecessarily quoted property 'a' found.*/
        "0": 0,    /*error Unnecessarily quoted property '0' found.*/
        "true": 0, /*error Unnecessarily quoted property 'true' found.*/
        "null": 0  /*error Unnecessarily quoted property 'null' found.*/
    };



    /*eslint quote-props: [2, "as-needed"]*/
    /*eslint-env es6*/
    
    var object1 = {
        "a-b": 0,
        "0x0": 0,
        "1e2": 0
    };
    
    var object2 = {
        foo: 'bar',
        baz: 42,
        true: 0,
        0: 0,
        'qux-lorem': true
    };
    
    var object3 = {
        foo() {
            return;
        }
    };



    /*eslint quote-props: [2, "as-needed", { "keywords": true }]*/
    
    var x = {
        while: 1,       /*error Unquoted reserved word 'while' used as key.*/
        volatile: "foo" /*error Unquoted reserved word 'volatile' used as key.*/
    };



    /*eslint quote-props: [2, "as-needed", { "keywords": true, "unnecessary": false }]*/
    
    var x = {
        "while": 1,
        "foo": "bar"  // Would normally have caused a warning
    };



    /*eslint quote-props: [2, "as-needed", { "numbers": true }]*/
    
    var x = {
        100: 1 /*error Unquoted number literal '100' used as key.*/
    }
## quotes
 Enforce Quote Style (quotes)

**Setting:** `[2,"single"]`





    /*eslint quotes: [2, "single"]*/
    
    var double = "double";                                 /*error Strings must use singlequote.*/
    var unescaped = "a string containing 'single' quotes"; /*error Strings must use singlequote.*/



    /*eslint quotes: [2, "single", "avoid-escape"]*/
    
    var double = "double"; /*error Strings must use singlequote.*/
    var double = `double`; /*error Strings must use singlequote.*/



    /*eslint quotes: [2, "single"]*/
    /*eslint-env es6*/
    
    var single = 'single';
    var backtick = `back${x}tick`; // backticks are allowed due to substitution



    /*eslint quotes: [2, "single", "avoid-escape"]*/
    
    var double = "a string containing 'single' quotes";
## radix
 Require Radix Parameter (radix)

**Setting:** `2`





    /*eslint radix: 2*/
    
    var num = parseInt("071");        /*error Missing radix parameter.*/
    
    var num = parseInt(someValue);    /*error Missing radix parameter.*/
    
    var num = parseInt("071", "abc"); /*error Invalid radix parameter.*/
    
    var num = parseInt();             /*error Missing parameters.*/



    /*eslint radix: 2*/
    
    var num = parseInt("071", 10);
    
    var num = parseInt("071", 8);
    
    var num = parseFloat(someValue);
## require-jsdoc
 Require JSDoc comment (require-jsdoc)

**Setting:** `0`


## require-yield
 Disallow generator functions that do not have `yield` (require-yield)

**Setting:** `2`





    /*eslint require-yield: 2*/
    /*eslint-env es6*/
    
    function* foo() { /*error This generator function does not have 'yield'.*/
      return 10;
    }



    /*eslint require-yield: 2*/
    /*eslint-env es6*/
    
    function* foo() {
      yield 5;
      return 10;
    }
    
    function foo() {
      return 10;
    }
    
    // This rule does not warn on empty generator functions.
    function* foo() { }
## semi
 Enforce or Disallow Semicolons (semi)

**Setting:** `[2,"always"]`





    /*eslint semi: [2, "always", { "omitLastInOneLineBlock": true}] */
    
    if (foo) {
        bar()                   /*error Missing semicolon.*/
    }
    
    if (foo) { bar(); }         /*error Extra semicolon.*/



    /*eslint semi: [2, "always", { "omitLastInOneLineBlock": true}] */
    
    if (foo) { bar() }
    
    if (foo) { bar(); baz() }
## semi-spacing
 Enforce spacing before and after semicolons (semi-spacing)

**Setting:** `[2,{"after":true,"before":false}]`


## sort-vars
 Variable Sorting (sort-vars)

**Setting:** `2`





    /*eslint sort-vars: 2*/
    
    var b, a;    /*error Variables within the same declaration block should be sorted alphabetically*/
    
    var a, B, c; /*error Variables within the same declaration block should be sorted alphabetically*/
    
    var a, A;    /*error Variables within the same declaration block should be sorted alphabetically*/



    /*eslint sort-vars: 2*/
    
    var a, b, c, d;
    
    var _a = 10;
    var _b = 20;
    
    var A, a;
    
    var B, a, c;



    /*eslint sort-vars: 2*/
    
    var c, d, a, b; /*error Variables within the same declaration block should be sorted alphabetically*/



    /*eslint sort-vars: 2*/
    
    var c, d, a, e; /*error Variables within the same declaration block should be sorted alphabetically*/
## space-before-blocks
 Require Or Disallow Space Before Blocks (space-before-blocks)

**Setting:** `[2,"always"]`


## space-before-function-paren
 Require or disallow a space before function parenthesis (space-before-function-paren)

**Setting:** `[2,"always"]`


## space-in-parens
 Disallow or enforce spaces inside of parentheses (space-in-parens)

**Setting:** `[2,"never"]`





    /*eslint space-in-parens: [2, "never"]*/
    
    foo( 'bar');  /*error There should be no spaces inside this paren.*/
    foo('bar' );  /*error There should be no spaces inside this paren.*/
    foo( 'bar' ); /*error There should be no spaces inside this paren.*/
    
    var foo = ( 1 + 2 ) * 3;             /*error There should be no spaces inside this paren.*/
    ( function () { return 'bar'; }() ); /*error There should be no spaces inside this paren.*/



    /*eslint space-in-parens: [2, "never"]*/
    
    foo();
    
    foo('bar');
    
    var foo = (1 + 2) * 3;
    (function () { return 'bar'; }());



    /*eslint space-in-parens: [2, "never", { "exceptions": ["{}"] }]*/
    
    foo({bar: 'baz'});    /*error There must be a space inside this paren.*/
    foo(1, {bar: 'baz'}); /*error There must be a space inside this paren.*/



    /*eslint space-in-parens: [2, "never", { "exceptions": ["{}"] }]*/
    
    foo( {bar: 'baz'} );
    foo(1, {bar: 'baz'} );



    /*eslint space-in-parens: [2, "never", { "exceptions": ["[]"] }]*/
    
    foo([bar, baz]);    /*error There must be a space inside this paren.*/
    foo([bar, baz], 1); /*error There must be a space inside this paren.*/



    /*eslint space-in-parens: [2, "never", { "exceptions": ["[]"] }]*/
    
    foo( [bar, baz] );
    foo( [bar, baz], 1);



    /*eslint space-in-parens: [2, "never", { "exceptions": ["()"] }]*/
    
    foo((1 + 2));    /*error There must be a space inside this paren.*/
    foo((1 + 2), 1); /*error There must be a space inside this paren.*/



    /*eslint space-in-parens: [2, "never", { "exceptions": ["()"] }]*/
    
    foo( (1 + 2) );
    foo( (1 + 2), 1);



    /*eslint space-in-parens: [2, "never", { "exceptions": ["empty"] }]*/
    
    foo(); /*error There must be a space inside this paren.*/



    /*eslint space-in-parens: [2, "never", { "exceptions": ["empty"] }]*/
    
    foo( );
## space-infix-ops
 Require Spaces Around Infix Operators (space-infix-ops)

**Setting:** `2`





    /*eslint space-infix-ops: 2*/
    /*eslint-env es6*/
    
    a+b                   /*error Infix operators must be spaced.*/
    
    a+ b                  /*error Infix operators must be spaced.*/
    
    a +b                  /*error Infix operators must be spaced.*/
    
    a?b:c                 /*error Infix operators must be spaced.*/
    
    const a={b:1};        /*error Infix operators must be spaced.*/
    
    var {a=0}=bar;        /*error Infix operators must be spaced.*/
    
    function foo(a=0) { } /*error Infix operators must be spaced.*/



    /*eslint space-infix-ops: 2*/
    /*eslint-env es6*/
    
    a + b
    
    a       + b
    
    a ? b : c
    
    const a = {b:1};
    
    var {a = 0} = bar;
    
    function foo(a = 0) { }
## space-unary-ops
 Require or disallow spaces before/after unary operators (space-unary-ops)

**Setting:** `[2,{"nonwords":false,"words":true}]`


## spaced-comment
 Requires or disallows a whitespace (space or tab) beginning a comment (spaced-comment)

**Setting:** `[2,"always"]`





    /* eslint spaced-comment: [2, "always", { "block": { "exceptions": ["-"] } }] */
    
    //--------------    /*error Expected space or tab after '//' in comment.*/
    // Comment block
    //--------------    /*error Expected space or tab after '//' in comment.*/



    /* eslint spaced-comment: [2, "always", { "exceptions": ["-", "+"] }] */
    
    //------++++++++    /*error Expected exception block, space or tab after '//' in comment.*/
    // Comment block
    //------++++++++    /*error Expected exception block, space or tab after '//' in comment.*/



    /* eslint spaced-comment: [2, "always", { "markers": ["/"] }] */
    
    ///This is a comment with a marker but without whitespace  /*error Expected space or tab after '///' in comment.*/



    /* eslint spaced-comment: [2, "always", { "exceptions": ["-", "+"] }] */
    
    /*------++++++++*/     /*error Expected exception block, space or tab after '/*' in comment.*/
    /* Comment block */
    /*------++++++++*/     /*error Expected exception block, space or tab after '/*' in comment.*/



    /* eslint spaced-comment: [2, "always", { "line": { "exceptions": ["-+"] } }] */
    
    /*-+-+-+-+-+-+-+*/     /*error Expected space or tab after '/*' in comment.*/
    // Comment block
    /*-+-+-+-+-+-+-+*/     /*error Expected space or tab after '/*' in comment.*/



    /* eslint spaced-comment: [2, "always"] */
    
    // This is a comment with a whitespace at the beginning
    
    /* This is a comment with a whitespace at the beginning */
    
    /*
     * This is a comment with a whitespace at the beginning
     */
    
    /*
    This comment has a newline
    */



    /* eslint spaced-comment: [2, "always", { "exceptions": ["-"] }] */
    
    //--------------
    // Comment block
    //--------------



    /* eslint spaced-comment: [2, "always", { "line": { "exceptions": ["-"] } }] */
    
    //--------------
    // Comment block
    //--------------



    /* eslint spaced-comment: [2, "always", { "exceptions": ["-+"] }] */
    
    //-+-+-+-+-+-+-+
    // Comment block
    //-+-+-+-+-+-+-+
    
    /*-+-+-+-+-+-+-+*/
    // Comment block
    /*-+-+-+-+-+-+-+*/



    /* eslint spaced-comment: [2, "always", { "block": { "exceptions": ["-+"] } }] */
    
    /*-+-+-+-+-+-+-+*/
    // Comment block
    /*-+-+-+-+-+-+-+*/



    /* eslint spaced-comment: [2, "always", { "exceptions": ["*"] }] */
    
    /****************
     * Comment block
     ****************/



    /* eslint spaced-comment: [2, "always", { "markers": ["/"] }] */
    
    /// This is a comment with a marker



    /* eslint spaced-comment: [2, "always", { "markers": ["global"] }] */
    
    /*global ABC*/



    /* eslint spaced-comment: [2, "always"] */
    
    /**
    * I am jsdoc
    */
## strict
 Strict Mode Directives (strict)

**Setting:** `[2,"never"]`





    /*eslint strict: [2, "never"]*/
    
    "use strict";          /*error Strict mode is not permitted.*/
    
    function foo() {
        "use strict";      /*error Strict mode is not permitted.*/
        return;
    }
    
    var bar = function() {
        "use strict";      /*error Strict mode is not permitted.*/
        return;
    };
    
    foo();
    bar();



    /*eslint strict: [2, "never"]*/
    
    function foo() {
        return;
    }
    
    var bar = function() {
        return;
    };
    
    foo();
    bar();
## use-isnan
 Require isNaN() (use-isnan)

**Setting:** `2`





    /*eslint use-isnan: 2*/
    
    if (foo == NaN) { /*error Use the isNaN function to compare with NaN.*/
        // ...
    }
    
    if (foo != NaN) { /*error Use the isNaN function to compare with NaN.*/
        // ...
    }



    /*eslint use-isnan: 2*/
    
    if (isNaN(foo)) {
        // ...
    }
    
    if (isNaN(NaN)) {
        // ...
    }
## valid-jsdoc
 Validates JSDoc comments are syntactically correct (valid-jsdoc)

**Setting:** `0`


## valid-typeof
 Ensures that the results of typeof are compared against a valid string (valid-typeof)

**Setting:** `2`





    /*eslint valid-typeof: 2*/
    
    typeof foo === "strnig"   /*error Invalid typeof comparison value*/
    typeof foo == "undefimed" /*error Invalid typeof comparison value*/
    typeof bar != "nunber"    /*error Invalid typeof comparison value*/
    typeof bar !== "fucntion" /*error Invalid typeof comparison value*/



    /*eslint valid-typeof: 2*/
    
    typeof foo === "string"
    typeof bar == "undefined"
    typeof foo === baz
    typeof bar === typeof qux
## vars-on-top
 Require Variable Declarations to be at the top of their scope (vars-on-top)

**Setting:** `2`





    /*eslint vars-on-top: 2*/
    
    // Variable declarations in a block:
    function doSomething() {
        var first;
        if (true) {
            first = true;
        }
        var second;                 /*error All 'var' declarations must be at the top of the function scope.*/
    }
    
    // Variable declaration in for initializer:
    function doSomething() {
        for (var i=0; i<10; i++) {} /*error All 'var' declarations must be at the top of the function scope.*/
    }
    
    // Variables after other statements:
    f();
    var a;                          /*error All 'var' declarations must be at the top of the function scope.*/



    /*eslint vars-on-top: 2*/
    
    function doSomething() {
        var first;
        var second; //multiple declarations are allowed at the top
        if (true) {
            first = true;
        }
    }
    
    function doSomething() {
        var i;
        for (i=0; i<10; i++) {}
    }



    /*eslint vars-on-top: 2*/
    
    var a;
    f();



    /*eslint vars-on-top: 2*/
    
    // Directives may precede variable declarations.
    "use strict";
    var a;
    f();
    
    // Comments can describe variables.
    function doSomething() {
        // this is the first var.
        var first;
        // this is the second var.
        var second
    }
## wrap-iife
 Require IIFEs to be Wrapped (wrap-iife)

**Setting:** `[2,"inside"]`





    /*eslint wrap-iife: [2, "inside"]*/
    
    var x = (function () { return { y: 1 };}()); /*error Wrap only the function expression in parens.*/



    /*eslint wrap-iife: [2, "inside"]*/
    
    var x = (function () { return { y: 1 };})();
## wrap-regex
 Require Regex Literals to be Wrapped (wrap-regex)

**Setting:** `0`


## yoda
 Require or disallow Yoda Conditions (yoda)

**Setting:** `0`


