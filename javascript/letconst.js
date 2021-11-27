var > we can reassign and redeclare
let > we can reassign and cannot redeclare
const > we cannot redeclare and nor reassign

var a = 10
var a;
a = 10

> var a = 10
undefined
> a
10
> var a = 11
undefined
> a
11
> a = 12
12
> 

> let b = 10
undefined
> b
10
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 11
11

> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.