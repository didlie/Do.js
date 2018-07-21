# Do.js
Do.js Javascript Singleton Function Localization Module

Do.js is a generalized Javascript singleton namespace control module. It enables unification of inlimited Javascript function namespaces in a single global namespace called "Do". Do.js is tiny and simple and contains only two native methods: 
1) Do.make(name,method); 
    // adds a value, function, or object by name to the singleton namespace;
    // returns true if successful, or false on failure, and failures are logged in the console.
2) Do.get(name); 
    Do.get(name)(optional params);
    // returns the value assigned to the singleton namespace;
    // If the value is a function/method, it can be executed in the global scope, through invocation Do.get(name)(params);
