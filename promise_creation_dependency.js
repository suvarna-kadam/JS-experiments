let cleanKitchen = function() {
    return new Promise(function(resolve,reject){
        console.log("cleaning kitchen.....");

        resolve("Cleaned the room");
    });
};

let removeGarbage = function(message) {
   return new Promise(function(resolve,reject){        
       console.log("removing garbage.....");


        resolve("removed garbage");
    });
};


let cleanDishes = function(message) {
   return new Promise(function(resolve,reject){     
          console.log("cleaning dishes.....");


        resolve("cleaned dishes");
    });
};

result = "I"
cleanKitchen().then(function(){
    return removeGarbage(result);
}).then(function(result){
    return cleanDishes(result);
}).then(function(result){
    console.log("All done!!!");
})