/**************************************************************************/
/****************Isaac Krishna Jacobs Christopher Deilson******************/
/**************************************************************************/
/*******************************7/21/2018**********************************/
/**************************************************************************/
/******************************* Do.js ************************************/
/**************************************************************************/


(function(){
        Do = (function(){
        var privateVar = [];
        function privateFunc1(name,method){
            if(name && method && !privateVar[name]){
                privateVar[name] = method;
                return true;
            }else if(privateVar[name]){
                console.log(`Error in Do, ${name} already exists.`);
                return false;
            }else if(!name || !method){
                console.log(`Error in Do, name and/or method are not defined.`);
                return false;
            }
        };
        function privateFunc2(name){
            if(privateVar[name]){
                return privateVar[name];
            }else{
                console.log(`Error in Do, variable/method ${name} not defined.`);
                return false;
            }
        };
        return {
            make: function(name,method){
                var y = privateFunc1(name,method);
                return y;
            },
            get: function(name){
                var y = privateFunc2(name);
                return y
            }
        }
    }());
}());
