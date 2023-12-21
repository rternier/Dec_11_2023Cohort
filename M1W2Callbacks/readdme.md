# June 20 - 2023 - Callbacks

Topics to Cover:

* [x] Questions from last lecture
* [x] Functions as Values
* [x] Functions as Callbacks
* [x] Anonymous Functions
* [x] Function Calling vs Passing (reference to a function)
* [x] Higher Order Functions
* [x] Arrow Functions (Intro + Common use for callbacks)
* [x] Nested SCope and Scope Chain



Out of Scope
- Asynchronous "anything"
- Closures
- Arrow Functions and This


Remember the song when it comes to Events and Callbacks:
I just met you,
And this is crazy,
But here's my number (delegate),
So if something happens (event),
Call me, maybe (callback)?

**Review**
Functions can be assigned to Variables
Functions can be stored in a data structure
Functions can be passed as an argument.

**Functions as Callbacks**
A callback function is a function that is passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action or routine.

**Anonymous Functions**
Anonymous functions are functions without a declared name. They are commonly used for one-time tasks, as callback functions, or assigned to a variable.

Real world reasons to use anonymous Functions?
- Event Handlers (You'll learn these later)
- Callbacks
- Immediately Invoked Function Expressions,  which allows for encapsulation and avoids variable polution. (Creates private scope)
- Functional Programming - you will use these in higher order functions like 'map', 'filter', 'reduce'

**Function Calling vs Passing (reference to a function)**
-You call a function by using () – the function call operator. 
-You can pass a reference to a function.

Remember, the difference between calling a function (which executes it) and passing a reference to a function (which can be called later) is the () operator.

The () operator in JavaScript, when appended to the name of a function, is known as the function call operator. This operator invokes, or calls, the function it follows, causing the code inside the function to be executed.
When you write a function's name followed by (), the JavaScript engine will execute that function right there and then. For example, if you have a function named sayHello, you could call it like this:

**Higher Order Functions**
-It is a function that takes one or more functions as arguments, returns a function, or both.

**Arrow Functions**
Arrow functions provide a shorter syntax for writing function expressions. They are often used with higher order functions and callbacks.

They’re a more concise syntax for writing function expressions in JavaScript. They are a new way to write anonymous functions, which means they do not have their own name.

The function keyword is replaced with an arrow (=>) placed between the argument list and the function body. The return keyword is still used to specify the value returned.
Arrow functions also have an even shorter syntax for "one-liner" functions that immediately return a value. We can remove the return keyword and the function body brackets. Here's the multiply function written this way:

**Nested SCope and Scope Chain**
-Each function has its own Scope. 
-Scope is created through {}’s
-You can access scope from outer (parent) scope in a chain

In JavaScript, variables have different levels of scope depending on where they're declared. Variables declared outside of any function have a global scope, and can be accessed from anywhere in the code. On the other hand, variables declared inside a function have local scope, and can only be accessed within that function or any nested functions.
The Scope Chain is the hierarchical arrangement of these scopes. In essence, it means that an inner scope has access to its own local scope, any outer scopes, and the global scope. However, an outer scope does not have access to inner scope variables.







