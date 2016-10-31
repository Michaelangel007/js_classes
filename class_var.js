/*

Javascript has 3 types of functions:

Private | Class    Function | function bar()                   |
Public  | Class    Funcion  | Class.foo()                      |
Public  | Instance Function | Class.prototype.qux = function() |

There are 4 different ways to the class from an object.

* typeof
* instanceof
* obj.constructor
* func.prototype, proto.isPrototypeOf

For derived class variables use:

    <Class>.prototype.constructor = <Class>;

* http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class
* http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript

*/

var TYPE = 
{
    FOO: 1,
    BAR: 2,
};

var Base = ( function()
{
    "use strict";

    Base.ID = TYPE.BAR;

    function Base() {} // private

    Base.prototype.init = function() // public
    {
        return this;
    };

    Base.prototype.dump = function()
    {
        console.log( this.ID               ); // error: this.ID
        console.log( this.constructor.name ); // "Base" or "Derived"
        console.log( this.constructor.ID   ); // Base.ID or Derived.ID, requires <Class>.prototype.constructor
    };

    return Base;

})();

var Derived = ( function()
{
    "use strict";

    Derived.ID = TYPE.FOO;

    Derived.prototype = new Base();
    Derived.prototype.constructor = Derived; // NOTE: Needed for <Class>.constructor.ID or <Class>.constructor.name

    function Derived() {} // private

    Derived.prototype.init = function() // public
    {
        Base.prototype.init.call( this );

        return this;
    };
    
    return Derived;

})();

var b = new Base   ().init();
var d = new Derived().init();

b.dump(); // Base, 2
d.dump(); // Derived, 1

