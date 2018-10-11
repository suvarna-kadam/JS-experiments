let promiseTocleanRoom = new Promise(function(resolve,reject) {
    console.log("actually cleaning the roooom");
    let isClean = true;
    if(isClean){
        resolve('Status:clean');
    }
    else {
        reject('fromReject');
    }
});


let cleanRoom = function() {
    return new Promise(function(resolve,reject){
        resolve('Cleaned the room');
    });
};

let removeGarbage = function(message) {
    return new Promise(function(resolve,reject){
        resolve(message+' remove garbage');
    });
};

let winIceCream = function(message) {
    return new Promise(function(resolve,reject){
        resolve(message+' Won Icecream');
    });
};



promiseTocleanRoom.then(function(fromresolve) {
    console.log('the room is ' +  fromresolve);
}).catch(function(fromReject){
    console.log('the room is'+ fromReject);
});

Promise.all([cleanRoom(),removeGarbage('I'), winIceCream('I')])
.then(
    function(fromresolve){
        console.log('Jobs ' +  fromresolve);

    });