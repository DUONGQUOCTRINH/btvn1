function Fouter(){
    var x = "hello";
    function FInner(){
        x = "World";
    }
    FInner();
    return x;
}
console.log(Fouter());

var myFunction = function () {
    var name = 'trinh';
    var myOtherFunction = function (){
        console.log('I am '+  name);
    };
    console.log(name);
    myOtherFunction();
};
myFunction();