
let promiseTocleanRoom = new Promise(function (resolve, reject) {
    console.log("doing cleaning");
    let isClean;
    if (isClean) {
        resolve('Cleaned the room');
    }
    else {
        reject('not yet done');
    }
});
promiseTocleanRoom.then(function (fromresolve) {
    console.log(fromresolve)
}).catch(function (fromReject) {
    console.log(fromReject)
});



console.log("finished cleaning");
