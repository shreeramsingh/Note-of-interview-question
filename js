(function f(a){
    return (function(){
        console.log(a);
        a=6;
    })()
})(21);
-------------
(()=>{
    var var1 =var2 =34;
    console.log(var1)
})()
console.log(var2)
-----------------
var myObject ={
    cnt=10,
    myMethod: ()=>{
        this.count--;
    }
}
myObject.myMethod();
console.log(myObject.cnt)
------------------------------
const f1 = (cb) =>{
    cb(()=>{
        console.log(3);
        return () => console.log(4);
    });
    console.log(1);
}

f1((cb) =>{
    cb()();
    console.log(2);
});
-----------------------------
function a(){
    setTimeout(()=>{
        console.log("Yes");
    })
}
a() //If the second argument (the delay) is not provided, it defaults to 0 milliseconds



