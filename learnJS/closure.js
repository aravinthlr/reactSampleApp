var callBack = [];
(function() {
var j=10;
    
    for(let i=1;i < 3;i++) {
        j++;
       callBack.push(function() {
           console.log(i,j)
           return i*10;}); 
    }
    
})();
console.log(callBack);
console.log(callBack[0]());